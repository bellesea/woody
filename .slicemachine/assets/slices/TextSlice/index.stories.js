import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Deserunt amet aliqua ullamco pariatur ea ex enim Lorem esse magna exercitation fugiat culpa. Magna Lorem excepteur id sint eiusmod cupidatat aute incididunt.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Nisi velit velit consequat cupidatat in minim do. Deserunt quis ad officia sit proident aute ex mollit Lorem nulla nostrud proident ut nostrud.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
