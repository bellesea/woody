import MyComponent from '../../../../slices/QuoteSlice';

export default {
  title: 'slices/QuoteSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote_slice","items":[],"primary":{},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote_slice","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Occaecat est duis velit commodo adipisicing irure sint nulla aliqua ad id.","spans":[]}],"reference":[{"type":"paragraph","text":"Minim excepteur pariatur qui ea aute magna ex reprehenderit. Eiusmod ex consequat fugiat qui in proident eiusmod dolore et deserunt qui commodo nulla quis officia. Aliqua non deserunt sint magna cillum exercitation non reprehenderit cupidatat.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
