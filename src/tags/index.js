import React, { useEffect, useState, forwardRef } from 'react'
import Tag from '../tag'
import { getDataset } from '../utils'
import './index.css'
// import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
  useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
// const SortableItem = SortableElement(
//   forwardRef(
//     (
//       {
//         _id,
//         label,
//         tagClassName,
//         dataset,
//         tagLabel,
//         description,
//         onDelete,
//         readOnly,
//         disabled,
//         labelRemove,
//         tagDisabled,
//         tagPrefix,
//         tagSuffix,
//       },
//       ref
//     ) => {
//       return (
//         <div ref={ref}>
//           <li
//             className={['tag-item', tagClassName].filter(Boolean).join(' ')}
//             key={_id}
//             index={_id}
//             {...getDataset(dataset)}
//           >
//             {' '}
//             <Tag
//               label={tagLabel || label}
//               tagPrefix={tagPrefix}
//               tagSuffix={tagSuffix}
//               id={`${_id}`}
//               onDelete={onDelete}
//               readOnly={readOnly}
//               disabled={disabled || tagDisabled}
//               labelRemove={labelRemove}
//             />
//           </li>
//         </div>
//       )
//     }
//   ),
//   { withRef: true }
// )
// const SortableList = SortableContainer(
//   ({ tags, onDelete, readOnly, disabled, labelRemove, lastItem, tagPrefix, tagSuffix, tagClassName }) => {
//     return (
//       <ul className="tag-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//         {tags.map((tags, index) => (
//           <SortableItem
//             key={index}
//             index={index}
//             onDelete={onDelete}
//             readOnly={readOnly}
//             disabled={disabled}
//             labelRemove={labelRemove}
//             tagDisabled={tags.disabled}
//             {...tags}
//             tagPrefix={tagPrefix}
//             tagSuffix={tagSuffix}
//             tagClassName={tagClassName}
//           />
//         ))}
//         <li className="tag-item">
//           {lastItem}
//           <span className="dropdown-icon" style={{ fontSize: '20px', color: '#bfbfbf' }}>
//             &#x2304;
//           </span>
//         </li>
//       </ul>
//     )
//   }
// )

const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      <li className={['tag-item', props.tagClassName].filter(Boolean).join(' ')} {...getDataset(props.dataset)}>
        {' '}
        <Tag
          label={props.tagLabel || props.label}
          tagPrefix={props.tagPrefix}
          tagSuffix={props.tagSuffix}
          id={id}
          onDelete={props.onDelete}
          readOnly={props.readOnly}
          disabled={props.disabled || props.tagDisabled}
          labelRemove={props.labelRemove}
        />
      </li>
    </div>
  )
})

const SortableItemV2 = props => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
  const {
    id,
    label,
    tagClassName,
    dataset,
    tagLabel,
    onDelete,
    readOnly,
    disabled,
    labelRemove,
    tagDisabled,
    tagPrefix,
    tagSuffix,
  } = props
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Item
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      id={id}
      label={label}
      dataset={dataset}
      tagLabel={tagLabel}
      onDelete={onDelete}
      readOnly={readOnly}
      disabled={disabled}
      labelRemove={labelRemove}
      tagDisabled={tagDisabled}
      tagPrefix={tagPrefix}
      tagSuffix={tagSuffix}
      tagClassName={tagClassName}
    />
  )
}

// const Tags = props => {
//   const {
//     tags,
//     onTagRemove,
//     onReorder,
//     texts = {},
//     disabled,
//     readOnly,
//     children,
//     tagPrefix,
//     tagSuffix,
//     tagClassName,
//   } = props

//   const [items, setItems] = useState(tags)
//   useEffect(() => {
//     setItems(tags)
//   }, [tags])
//   const onSortEnd = ({ oldIndex, newIndex }) => {
//     let i = arrayMove(items, oldIndex, newIndex)
//     setItems(i)
//     onReorder(i)
//   }

//   const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>
//   return (
//     <SortableList
//       axis="xy"
//       lastItem={lastItem}
//       onSortEnd={onSortEnd}
//       tags={items}
//       onDelete={onTagRemove}
//       readOnly={readOnly}
//       disabled={disabled}
//       labelRemove={texts.labelRemove}
//       tagPrefix={tagPrefix}
//       tagSuffix={tagSuffix}
//       tagClassName={tagClassName}
//     />
//   )
// }

const Tags = props => {
  const {
    tags,
    onTagRemove,
    onReorder,
    texts = {},
    disabled,
    readOnly,
    children,
    tagPrefix,
    tagSuffix,
    tagClassName,
  } = props
  const [activeId, setActiveId] = useState(null)
  const [items, setItems] = useState(tags)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>

  function handleDragStart(event) {
    const { active } = event
    console.log('active', active)
    setActiveId(active.id)
  }
  function handleDragEnd(event, f_items) {
    const { active, over } = event
    console.log('active', active)
    console.log('over', over)
    if (active.id !== over.id) {
      const oldIndex = f_items.findIndex(i => i._id === active.id)
      const newIndex = f_items.findIndex(i => i._id === over.id)
      console.log('oldItems', f_items)
      let newItems = arrayMove(f_items, oldIndex, newIndex)
      console.log('newItems', newItems)
      setItems(newItems)
      onReorder(newItems)
    }
  }
  useEffect(() => {
    console.log('props', props)
    console.log('items', tags)
    setItems(tags)
  }, [tags])
  const getActiveItem = id => {
    if (!id) return null
    const item = items.find(i => i._id === id)
    if (item) {
      return (
        <Item
          id={id}
          label={item.label}
          onDelete={onTagRemove}
          readOnly={readOnly}
          disabled={disabled}
          labelRemove={texts.labelRemove}
          tagDisabled={item.disabled}
          tagPrefix={tagPrefix}
          tagSuffix={tagSuffix}
          tagClassName={tagClassName}
        />
      )
    }
    return null
  }
  return (
    <ul className="tag-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={e => handleDragEnd(e, items)}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          {items.map((item, index) => (
            <SortableItemV2
              id={item._id}
              key={index}
              onDelete={onTagRemove}
              readOnly={readOnly}
              disabled={disabled}
              labelRemove={texts.labelRemove}
              tagDisabled={item.disabled}
              {...item}
              tagPrefix={tagPrefix}
              tagSuffix={tagSuffix}
              tagClassName={tagClassName}
            />
          ))}
          <li className="tag-item">
            {lastItem}
            <span className="dropdown-icon" style={{ fontSize: '20px', color: '#bfbfbf' }}>
              &#x2304;
            </span>
          </li>
        </SortableContext>
        <DragOverlay>{getActiveItem(activeId)}</DragOverlay>
      </DndContext>
    </ul>
  )
}

export default Tags
