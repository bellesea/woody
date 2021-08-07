import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Enim consectetur proident pariatur laborum aliquip excepteur aute dolore do amet non mollit officia. Dolor excepteur anim officia tempor adipisicing do dolor nisi. Adipisicing ipsum ullamco cillum qui.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Cillum tempor laborum proident commodo reprehenderit minim exercitation mollit. Sit nulla voluptate enim amet amet aute cillum ipsum elit ex voluptate proident. Ex aliquip fugiat tempor.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
