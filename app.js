// build component
class Channel extends React.Component{

    onClick() {
        console.log('I was clicked', this.props.name);

    }

    render() {
        return (
        <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
		      )
    
	   }
    
}


// call component

ReactDOM.render(<Channel name='Hardware Support' />, document.getElementById('app'));