/**
 * Created by litong on 2017/6/8.
 */
import React from 'react'
import { connect } from 'react-redux'

import { getDetailInfo } from '../../actions/detail'

import Header from '../../components/Header'
import Buy from './subpage/Buy'
import Info from './subpage/Info'
class Detail extends React.Component {
    render() {
        const match = this.props.match
        return (
            <div>
                <Header title="商户详情"></Header>
                <Buy></Buy>
                <Info id={match.id}></Info>
            </div>
        )
    }

    componentDidMount() {
        const match = this.props.match
        //根据 id 来请求详情的内容
        this.props.getDetailInfo(match.params.id)
    }
}

function mapStateToProps(state) {
    return {
        detail: state.detailinfo.info
    }
}

function mapDispatchToProps(dispatch,ownPorps) {
    return {
        getDetailInfo: (id) => {
            dispatch(getDetailInfo(id))
        }
    }
}

Detail = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail)

export default Detail