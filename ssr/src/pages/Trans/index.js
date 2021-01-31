import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { getTransList } from './store/action'
class Trans extends PureComponent {
	componentDidMount() {
		const { getList, list } = this.props;
		if (!list.length) {
			getList()
		}
	}
	render() {
		const { list } = this.props;
		return (
			<div>
				{list ? list : '暂无内容！'	}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		list: state.trans.data,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		getList: () => dispatch(getTransList())
	}
}

const exportTrans = connect(mapStateToProps, mapDispatchToProps)(Trans);
exportTrans.loadData = (store) => {
	return store.dispatch(getTransList())
}

export default exportTrans;
