// class ErrorHandler extends Error {
//   statusCode: number;

//   constructor(message: string, statusCode: number) {
//     super(message);
//     this.statusCode = statusCode;
//     Object.setPrototypeOf(this, ErrorHandler.prototype);
//   }
// }

// export default ErrorHandler;

class ErrorHandler extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
  }
  
  export default ErrorHandler;