import React, { useEffect, useState, forwardRef } from 'react'
import Tag from '../tag'
import { getDataset } from '../utils'
import './index.css'
// import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
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

const SortableItemV2 = props => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
  const {
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
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <li
        className={['tag-item', tagClassName].filter(Boolean).join(' ')}
        // key={props.id}
        // index={props.id}
        {...getDataset(dataset)}
      >
        {' '}
        <Tag
          label={tagLabel || label}
          tagPrefix={tagPrefix}
          tagSuffix={tagSuffix}
          id={`${props.id}`}
          onDelete={onDelete}
          readOnly={readOnly}
          disabled={disabled || tagDisabled}
          labelRemove={labelRemove}
        />
      </li>
    </div>
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

const TagsV2 = props => {
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
  const [items, setItems] = useState(tags.map(tag => ({ ...tag, id: tag._id })))
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  const lastItem = children || <span className="placeholder">{texts.placeholder || 'Choose...'}</span>
  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      let i
      setItems(items => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)
        i = arrayMove(items, oldIndex, newIndex)
        return i
      })
      onReorder(i)
    }
  }
  useEffect(() => {
    console.log('props', props)
    console.log('items', tags)
  }, [tags])
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {/* <ul className="tag-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}> */}
        {items.map((item, index) => (
          <SortableItemV2
            key={index}
            id={item._id}
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
        {/* <li className="tag-item">
            {lastItem}
            <span className="dropdown-icon" style={{ fontSize: '20px', color: '#bfbfbf' }}>
              &#x2304;
            </span>
          </li>
        </ul> */}
      </SortableContext>
    </DndContext>
  )
}

export default TagsV2
