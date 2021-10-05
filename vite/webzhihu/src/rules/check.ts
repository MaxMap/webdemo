/**
 * 校验手机号
 */
export function isPoneAvailable(poneInput:string|number): boolean {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(String(poneInput))) {
        return false;
    } else {
        return true;
    }
} 