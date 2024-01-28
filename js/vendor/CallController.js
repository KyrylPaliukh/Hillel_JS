class CallController {
  #currentCall = null;

  #callHistory = [];

  constructor() {
    this.#trackCallStatus();
  }

  startCall(phoneNumber, name) {
    if (this.#currentCall) {
      console.warn('You currently have an ongoing call!');
      return this.#currentCall;
    }

    const callName = name !== undefined ? name : null;
    this.#currentCall = new Call(phoneNumber, callName);
  }

  #endCall() {
    if (!this.#currentCall) {
      console.warn('Current call does not exist (404)');
      return null;
    }

    this.#callHistory.push(Object.freeze(this.#currentCall));
    const callHistoryList = document.getElementById('call-history-list');
    const historyItem = document.createElement('li');
    historyItem.className = 'list-group-item';

    const callInfo = this.#currentCall.name || 'Unknown';

    historyItem.textContent = `Call to ${callInfo} - ${new Date()}`;
    callHistoryList.appendChild(historyItem);

    this.#currentCall = null;
  }

  endCallByCaller() {
    if (!this.#currentCall) {
      console.warn('Current call does not exist');
      return null;
    }

    this.#currentCall.endCallOutside();
    this.#endCall();
  }

  #trackCallStatus() {
    Call.addChangeStatusListener((callStatus) => {
      if (callStatus === Call.CALL_STATUSES.disconnect || callStatus === Call.CALL_STATUSES.rejected) {
        this.#endCall();
      }
    });
  }

  get currentCall() {
    return this.#currentCall;
  }

  get callHistory() {
    return this.#callHistory;
  }
}
