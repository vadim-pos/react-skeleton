const { render } = ReactDOM;

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	IT WORKS!!
	</h1>,
	document.getElementById('react-container')
);