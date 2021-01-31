import React, { PureComponent } from 'react';
import {Helmet} from 'react-helmet'; 
import { connect } from 'react-redux'
import { getHomeList } from './store/action'
import styles from './index.css';
import withStyle from '../../withStyle';
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
			<div className={styles.bg}>
				<Helmet>
					<title>new - 资讯展示页面</title>
				</Helmet>
				{
					list && list.map(item => {
						return <div key={item.id}>{item.name} <div>{item.content}</div> </div>
					})
				}
			</div>
		)
	}
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
const exportHome = connect(mapStateToProps, mapDispatchToProps)(withStyle(Home, styles));

exportHome.loadData = (store) => {
	return store.dispatch(getHomeList())
}

export default exportHome;