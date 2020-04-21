import UserDetails from '../User/UserContainer'
import { connect } from 'react-redux'

import { fetchUserData } from './dux'

const mapStateToProps = (state) => ({
  userData: state.UserReducer.userData

})

const mapDispatchToProps = {
    fetchUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)


// export default UserDetails; 
