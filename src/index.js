/*!
 * React Dropdown Tree Select
 * A lightweight, fast and highly customizable tree select component.
 * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
 * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
 * license MIT
 * see https://github.com/dowjones/tmr-tree-select
 */
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { isOutsideClick, clientIdGenerator } from './utils'
import Input from './input'
import Tags from './tags'
import Trigger from './trigger'
import Tree from './tree'
import TreeManager from './tree-manager'
import keyboardNavigation from './tree-manager/keyboardNavigation'

import './index.css'
import { getAriaLabel } from './a11y'

class DropdownTreeSelect extends Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    clearSearchOnChange: PropTypes.bool,
    keepTreeOnSearch: PropTypes.bool,
    keepChildrenOnSearch: PropTypes.bool,
    keepOpenOnSelect: PropTypes.bool,
    texts: PropTypes.shape({
      placeholder: PropTypes.string,
      inlineSearchPlaceholder: PropTypes.string,
      noMatches: PropTypes.string,
      label: PropTypes.string,
      labelRemove: PropTypes.string,
    }),
    showDropdown: PropTypes.oneOf(['default', 'initial', 'always']),
    className: PropTypes.string,
    onChange: PropTypes.func,
    onAction: PropTypes.func,
    onNodeToggle: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    mode: PropTypes.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
    showPartiallySelected: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    id: PropTypes.string,
    searchPredicate: PropTypes.func,
    inlineSearchInput: PropTypes.bool,
    tabIndex: PropTypes.number,
    labelPrefix: PropTypes.func,
    labelSuffix: PropTypes.func,
    tagPrefix: PropTypes.func,
    tagSuffix: PropTypes.func,
    tagClassName: PropTypes.string,
  }

  static defaultProps = {
    onAction: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    texts: {},
    showDropdown: 'default',
    inlineSearchInput: false,
    tabIndex: 0,
  }

  constructor(props) {
    super(props)
    this.state = {
      searchModeOn: false,
      currentFocus: undefined,
      searchTerm: '',
    }
    this.clientId = props.id || clientIdGenerator.get(this)
  }

  initNewProps = ({ data, mode, value, showDropdown, showPartiallySelected, searchPredicate }) => {
    value = value ? value : []
    data = data.map(e => {
      let children = e.children.map(c => {
        let obj = { ...c }
        if (value.includes(c.value)) {
          obj = { ...obj, isDefaultValue: true }
        } else {
          obj = { ...obj, isDefaultValue: false }
        }
        if (obj.children) {
          obj.children = obj.children.map(c1 => {
            if (value.includes(c1.value)) {
              return { ...c1, isDefaultValue: true }
            } else {
              return { ...c1, isDefaultValue: false }
            }
          })
        }
        return obj
      })
      return { ...e, children: children }
    })

    this.treeManager = new TreeManager({
      data,
      mode,
      showPartiallySelected,
      rootPrefixId: this.clientId,
      searchPredicate,
    })
    let treeAndTags = this.treeManager.getTreeAndTags()
    // console.log(treeAndTags.tags)
    let vtags = []
    for (let i = 0; i < treeAndTags.tags.length; i++) {
      let obj = treeAndTags.tags.find(e => e.value === value[i])
      // console.log(obj)
      vtags.push(obj)
    }
    treeAndTags.tags = vtags
    vtags.length > 0 && this.props.onChange({}, vtags)
    /* console.log('vtags')
    console.log(vtags) */
    this.setState(prevState => {
      const currentFocusNode = prevState.currentFocus && this.treeManager.getNodeById(prevState.currentFocus)
      if (currentFocusNode) {
        currentFocusNode._focused = true
      }
      return {
        showDropdown: /initial|always/.test(showDropdown) || prevState.showDropdown === true,
        ...treeAndTags,
      }
    })
    /*  if(v.length >0)
    {
      this.setState({...this.state,tags : v})
    } */
  }

  resetSearchState = () => {
    // clear the search criteria and avoid react controlled/uncontrolled warning
    if (this.searchInput) {
      this.searchInput.value = ''
    }

    return {
      tree: this.treeManager.restoreNodes(), // restore the tree to its pre-search state
      searchModeOn: false,
      allNodesHidden: false,
    }
  }

  componentWillMount() {
    //console.log('will mount called')
    this.initNewProps(this.props)
  }
  componentDidUpdate(prevProps) {
    // console.log('component did update called')

    if (JSON.stringify(this.props.data) !== JSON.stringify(prevProps.data)) this.initNewProps(this.props)
    //this.setState({...this.state,data:this.props.data})
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false)
  }

  componentWillReceiveProps(nextProps) {
    /*    console.log('will receive props called')
    console.log(nextProps)
    this.setState({...this.state,data:this.props.data}) */
    //this.initNewProps(nextProps)
  }

  handleClick = (e, callback) => {
    this.setState(prevState => {
      // keep dropdown active when typing in search box
      const showDropdown = this.props.showDropdown === 'always' || this.keepDropdownActive || !prevState.showDropdown

      // register event listeners only if there is a state change
      if (showDropdown !== prevState.showDropdown) {
        if (showDropdown) {
          document.addEventListener('click', this.handleOutsideClick, false)
        } else {
          document.removeEventListener('click', this.handleOutsideClick, false)
        }
      }

      if (showDropdown) this.props.onFocus()
      else this.props.onBlur()

      return !showDropdown ? { showDropdown, ...this.resetSearchState() } : { showDropdown }
    }, callback)
  }

  handleOutsideClick = e => {
    if (this.props.showDropdown === 'always' || !isOutsideClick(e, this.node)) {
      return
    }

    this.handleClick()
  }

  onInputChange = value => {
    const { allNodesHidden, tree } = this.treeManager.filterTree(
      value,
      this.props.keepTreeOnSearch,
      this.props.keepChildrenOnSearch
    )
    const searchModeOn = value.length > 0

    this.setState({
      tree,
      searchModeOn,
      allNodesHidden,
      searchTerm: value,
    })
  }

  onTagRemove = (id, isKeyboardEvent) => {
    /* console.log('onTagRemove') */
    const { tags: prevTags } = this.state
    /* console.log(prevTags) */
    this.onCheckboxChange(id, false, tags => {
      if (!isKeyboardEvent) return

      keyboardNavigation.getNextFocusAfterTagDelete(id, prevTags, tags, this.searchInput).focus()
    })
  }
  onTagReorder = i => {
    this.setState({ ...this.state, tags: i })
    this.props.onChange({}, i)
  }
  onNodeToggle = id => {
    this.treeManager.toggleNodeExpandState(id)
    const tree = this.state.searchModeOn ? this.treeManager.matchTree : this.treeManager.tree
    this.setState({ tree })
    typeof this.props.onNodeToggle === 'function' && this.props.onNodeToggle(this.treeManager.getNodeById(id))
  }

  onCheckboxChange = (id, checked, callback) => {
    const { mode, keepOpenOnSelect, clearSearchOnChange } = this.props
    const { currentFocus, searchModeOn } = this.state
    this.treeManager.setNodeCheckedState(id, checked)
    /* console.log('tags')
    console.log(this.state.tags) */
    let prevvalue = this.state.tags.map(e => e.value)
    let newtag = this.treeManager.tags.filter(e => {
      if (!prevvalue.includes(e.value)) return e
    })
    let currvalue = this.treeManager.tags.map(e => e.value)
    let removedTag = this.state.tags.filter(e => {
      if (!currvalue.includes(e.value)) return e
    })
    let tags = this.state.tags
    tags.push(...newtag)
    tags = removedTag[0]
      ? tags.filter(e => {
          if (removedTag[0].value !== e.value) return e
        })
      : tags
    /*  console.log('treetags')
    console.log(tags)
    console.log(newtag) */
    const isSingleSelect = ['simpleSelect', 'radioSelect'].indexOf(mode) > -1
    const showDropdown = isSingleSelect && !keepOpenOnSelect ? false : this.state.showDropdown
    const currentFocusNode = currentFocus && this.treeManager.getNodeById(currentFocus)
    const node = this.treeManager.getNodeById(id)

    /* if (!tags.length) {
      console.log('restore Called')
      this.treeManager.restoreDefaultValues()
      tags = this.treeManager.tags
    } */

    const tree = searchModeOn ? this.treeManager.matchTree : this.treeManager.tree
    const nextState = {
      tree,
      tags,
      showDropdown,
      currentFocus: id,
    }

    if ((isSingleSelect && !showDropdown) || clearSearchOnChange) {
      Object.assign(nextState, this.resetSearchState())
    }

    if (isSingleSelect && !showDropdown) {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    keyboardNavigation.adjustFocusedProps(currentFocusNode, node)

    this.setState(nextState, () => {
      callback && callback(tags)
      /*  this.props.onChange(node, tags) */
    })

    /*  console.log('tags')
    console.log(tags) */
    /*  this.setState({...this.state,tags : tags}) */
    this.props.onChange(node, tags)
  }

  onAction = (nodeId, action) => {
    this.props.onAction(this.treeManager.getNodeById(nodeId), action)
  }

  onInputFocus = () => {
    this.keepDropdownActive = true
  }

  onInputBlur = () => {
    this.keepDropdownActive = false
  }

  onTrigger = e => {
    this.handleClick(e, () => {
      // If the dropdown is shown after key press, focus the input
      if (this.state.showDropdown) {
        this.searchInput.focus()
      }
    })
  }

  onKeyboardKeyDown = e => {
    const { readOnly, mode } = this.props
    const { showDropdown, tags, searchModeOn, currentFocus } = this.state
    const tm = this.treeManager
    const tree = searchModeOn ? tm.matchTree : tm.tree

    if (!showDropdown && (keyboardNavigation.isValidKey(e.key, false) || /^\w$/i.test(e.key))) {
      // Triggers open of dropdown and retriggers event
      e.persist()
      this.handleClick(null, () => this.onKeyboardKeyDown(e))
      if (/\w/i.test(e.key)) return
    } else if (showDropdown && keyboardNavigation.isValidKey(e.key, true)) {
      const newFocus = tm.handleNavigationKey(
        currentFocus,
        tree,
        e.key,
        readOnly,
        !searchModeOn,
        this.onCheckboxChange,
        this.onNodeToggle
      )
      if (newFocus !== currentFocus) {
        this.setState({ currentFocus: newFocus }, () => {
          const ele = document && document.getElementById(`${newFocus}_li`)
          ele && ele.scrollIntoView()
        })
      }
    } else if (showDropdown && ['Escape', 'Tab'].indexOf(e.key) > -1) {
      if (mode === 'simpleSelect' && tree.has(currentFocus)) {
        this.onCheckboxChange(currentFocus, true)
      } else {
        // Triggers close
        this.keepDropdownActive = false
        this.handleClick()
      }
      return
    } else if (e.key === 'Backspace' && tags.length && this.searchInput.value.length === 0) {
      const lastTag = tags.pop()
      this.onCheckboxChange(lastTag._id, false)
    } else {
      return
    }
    e.preventDefault()
  }

  getAriaAttributes = () => {
    const { mode, texts } = this.props

    if (mode !== 'radioSelect') return {}

    return {
      role: 'radiogroup',
      ...getAriaLabel(texts.label),
    }
  }

  render() {
    const {
      disabled,
      readOnly,
      mode,
      texts,
      inlineSearchInput,
      tabIndex,
      labelPrefix,
      labelSuffix,
      tagPrefix,
      tagSuffix,
      tagClassName,
    } = this.props
    const { showDropdown, currentFocus, tags, vtags } = this.state
    /*  console.log('tags')
    console.log(tags)
    console.log('value')
    console.log(this.props.value) */
    /*     let ttags = this.props.value && this.props.value.length>0 ? this.props.value : tags */
    /* console.log(vtags)
    console.log(tags) */
    const activeDescendant = currentFocus ? `${currentFocus}_li` : undefined

    const commonProps = {
      disabled,
      readOnly,
      activeDescendant,
      texts,
      mode,
      clientId: this.clientId,
      labelPrefix,
      labelSuffix,
      tagPrefix,
      tagSuffix,
      tagClassName,
    }

    const searchInput = (
      <Input
        inputRef={el => {
          this.searchInput = el
        }}
        onInputChange={this.onInputChange}
        onFocus={this.onInputFocus}
        onBlur={this.onInputBlur}
        onKeyDown={this.onKeyboardKeyDown}
        {...commonProps}
        inlineSearchInput={inlineSearchInput}
      />
    )
    return (
      <div
        id={this.clientId}
        className={[this.props.className && this.props.className, 'tmr-tree-select'].filter(Boolean).join(' ')}
        ref={node => {
          this.node = node
        }}
      >
        <div
          className={['dropdown', mode === 'simpleSelect' && 'simple-select', mode === 'radioSelect' && 'radio-select']
            .filter(Boolean)
            .join(' ')}
        >
          <Trigger
            onTrigger={this.onTrigger}
            showDropdown={showDropdown}
            {...commonProps}
            tags={tags}
            tabIndex={tabIndex}
          >
            <Tags tags={tags} onReorder={this.onTagReorder} onTagRemove={this.onTagRemove} {...commonProps}>
              {!inlineSearchInput && searchInput}
            </Tags>
          </Trigger>
          {showDropdown && (
            <div className="dropdown-content" {...this.getAriaAttributes()}>
              {inlineSearchInput && searchInput}
              {this.state.allNodesHidden ? (
                <span className="no-matches">{texts.noMatches || 'No matches found'}</span>
              ) : (
                <Tree
                  data={this.state.tree}
                  keepTreeOnSearch={this.props.keepTreeOnSearch}
                  keepChildrenOnSearch={this.props.keepChildrenOnSearch}
                  searchModeOn={this.state.searchModeOn}
                  onAction={this.onAction}
                  onCheckboxChange={this.onCheckboxChange}
                  onNodeToggle={this.onNodeToggle}
                  mode={mode}
                  showPartiallySelected={this.props.showPartiallySelected}
                  {...commonProps}
                  searchTerm={this.state.searchTerm}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default DropdownTreeSelect
