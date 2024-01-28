class Call {
  #debugFlag = true;

  #connectionTimeout = 2000;

  #connectionTimer = null;

  #inProgressTimeout = 3000;

  #inProgressTimer = null;

  #timerId = null;

  #duration = 0;

  #startDate = null;

  #endDate = null;

  #phone = null;

  #name = null;

  #status = null;

  static CALL_STATUSES = {
    disconnect: 'disconnect',
    rejected: 'rejected',
    connecting: 'connecting',
    inProgress: 'in progress',
  };

  static changeStatusHandlers = [];

  constructor(phoneNumber, name = null) {
    if (!Call.validatePhoneNumber(phoneNumber)) {
      throw new Error('Number is not correct');
    }

    this.#phone = phoneNumber;
    this.#name = name;
    this.#changeCallStatus(Call.CALL_STATUSES.connecting);
  }

  #changeCallStatus(status) {
    this.#status = status;

    if (this.#status === Call.CALL_STATUSES.connecting) {
      this.#startCalcCallDuration();
      this.#startDate = new Date();
      this.#connectionTimer = setTimeout(
        () => this.#changeCallStatus(Call.#getRandomCallStatus()),
        this.#connectionTimeout,
      );
    }

    if (this.#status === Call.CALL_STATUSES.inProgress) {
      this.#inProgressTimer = setTimeout(
        () => this.#changeCallStatus(Call.CALL_STATUSES.disconnect),
        this.#inProgressTimeout,
      );
    }

    if (this.#status === Call.CALL_STATUSES.rejected || this.#status === Call.CALL_STATUSES.disconnect) {
      this.#endCall();
    }

    this.#callEventHandlers(this.#status);
  }

  #endCall() {
    clearTimeout(this.#connectionTimer);
    clearTimeout(this.#inProgressTimer);
    this.#connectionTimer = null;
    this.#inProgressTimer = null;

    this.#endCalcCallDuration();
    this.#endDate = new Date();
  }

  endCallOutside() {
    this.#changeCallStatus(Call.CALL_STATUSES.disconnect);
  }

  static #getRandomCallStatus() {
    const randomNum = Math.floor(Math.random() * 10);
    return randomNum >= 5 ? Call.CALL_STATUSES.inProgress : Call.CALL_STATUSES.rejected;
  }

  #startCalcCallDuration() {
    this.#timerId = setInterval(() => {
      this.#duration += 1;
    }, 1000);
  }

  #endCalcCallDuration() {
    clearInterval(this.#timerId);
    this.#timerId = null;
  }

  #callEventHandlers(...data) {
    Call.changeStatusHandlers.forEach((handler) => {
      handler(...data);
    });
  }

  static validatePhoneNumber(phoneNumber) {
    let validated = false;

    if (typeof phoneNumber === 'string' && phoneNumber.trim().length > 0) {
      validated = true;
    }

    return validated;
  }

  static addChangeStatusListener(handler) {
    if (typeof handler !== 'function') return;
    Call.changeStatusHandlers.push(handler);
  }

  static removeChangeStatusListener(handler) {
    if (typeof handler !== 'function') return;
    if (Call.changeStatusHandlers.length === 0) return;

    const handlerIndex = Call.changeStatusHandlers.findIndex((item) => handler === item);

    Call.changeStatusHandlers.splice(handlerIndex, 1);
  }
}
