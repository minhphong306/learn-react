Đại ca Phong học React - 2020

<details>
    <summary>Truyền prop từ parent -> children</summary>

### Parent
```
<ToDoItem title="hello"/>
```
### Children
```
{this.props.title}
```
</details>


<details>
    <summary>Sử dụng state</summary>

### Set state
```
this.setState({
    currentColor: 'red'
});
```
### Get state
```
const { currentColor } = this.state;
```
</details>