import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { getHomeList } from './store/action'
class Home extends PureComponent {
	componentDidMount() {
		const { getList, list } = this.props;
		if (!list.length) {
			getList()
		}
	}
	render() {
		const { age, name, list } = this.props;
		return (
			<div>
				{
					list && list.map(item => {
						return <div key={item.id}>{item.name} <div>{item.content}</div> </div>
					})
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