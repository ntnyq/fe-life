# React

## Ref 获取 DOM 元素

```tsx
class RefDemo extends Component {
  public childNode1: HTMLElement | null
  public childNode2: HTMLElement | null

  constructor (props) {
    super(props)
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput () {
    this.textInput.current.focus()
  }

  saveChildNodeOne: (node: HTMLElement) => {
    this.childNode1 = node
  }

  componentDidMount () {
    console.log(this.childNode1)
    console.log(this.childNode2)
  }

  render () {
    return (
      <div className='father'>
        <div
          className='child1'
          ref={this.saveChildNodeOne}
        >
          Child1
        </div>
        <div
          className='child2'
          ref={(node: HTMLElement) => (this.childNode2 = node)}
        >
          Child2
        </div>
        <input type='text' ref={this.textInput}>
        <button
          onClick={this.focusTextInput}
          type='button'
        >
          Button
        </button>
      </div>
    )
  }
}
```
