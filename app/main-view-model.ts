import { Observable } from "tns-core-modules/data/observable";
import * as Kinvey from 'kinvey-nativescript-sdk';
import { getFrameById } from "tns-core-modules/ui/frame/frame";

export class HelloWorldModel extends Observable {

	private _counter: number;
	private _message: string;

	constructor() {
		super();

		// Initialize default values.
		this._counter = 42;
		this.updateMessage();
	}

	get message(): string {
		return this._message;
	}

	set message(value: string) {
		if (this._message !== value) {
			this._message = value;
			this.notifyPropertyChange("message", value);
		}
	}

	onTap() {
		this._counter--;
		this.updateMessage();
	}

	private updateMessage() {
		if (this._counter <= 0) {
			this.message = "Hoorraaay! You unlocked the NativeScript clicker achievement!";
		} else {
			this.message = `${this._counter} taps left`;
		}
	}
}
