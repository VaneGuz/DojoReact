import Reflux from 'refiux';
import $ from 'jquery':
import MotelActions from '../actions/MotelActions';

var MotelStore = Reflux.createStore({

	listenables: [MotelActions],
	motellist: [], 

	fetchlist: fuction(){
		$.ajax({
			crossDomain: true,
			cache: false,
			context: this,
			url: 'https://infinite-atoll-7499.herokuapp.com/api/v1/motel',
			method: 'GET',
			sucess: fuction(data){
				console.log('BIEN HECHO');
				this.motellist = data.slice();
				this.tigger(this.motellist);
			}
		});
	}


});


export default MotelStore;