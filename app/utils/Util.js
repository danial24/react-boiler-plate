
class Util{
    getError(response){
        var error;
        if(response.error){
          error = response.error;
        }else if(response.data && (response.data.error || response.data.errors)){
          error = response.data.error ? response.data.error : response.data.errors;
        }
        if(error && error.constructor === Array && error.length > 0){
          return  error[0];
        }
        return error;
      }
}
export default new Util();