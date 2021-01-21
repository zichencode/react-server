import React, { PureComponent } from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/action'
class Home extends PureComponent {
	componentDidMount() {
		console.log(this.props, 'props');
		const { getList } = this.props;
		getList()
	}
	render() {
		const { age, name, list } = this.props;
		return (
			<div>
				<div><Header /></div>
				{
					list && list.map(item => <div key={item.id}>{item.title}</div>)
				}
			</div>
		)
	}
}

Home.loadData = (store) => {
	return store.dispatch(getHomeList())
}

const mapStateToProps = (state, ownProps) => {
	return {
		name: state.home.name,
		age: state.home.age,
		list: state.home.list,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		// { type: 'home/list' }
		getList: () => dispatch(getHomeList())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);