/*jshint esversion:6*/

class ClassEvent {

	constructor(){

		this._events = {};

	}

	emit(){

		let args = [...arguments];
		let eventName = args.shift();

		args.push(new Event(eventName));

		if (this._events[eventName] instanceof Array) {

			this._events[eventName].forEach(fn=>{

				fn.apply(null, args);

			});

		}

	}

	on(eventName, fn){

		if (!this._events[eventName]) this._events[eventName] = [];

		this._events[eventName].push(fn);

	}

}

exports = ClassEvent;