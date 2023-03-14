let parens = /\(([0-9+\-*/\^ .]+)\)/             // Regex for identifying parenthetical expressions
let exp = /((?:\-)?\d+(?:\.\d+)?) ?\^ ?((?:\-)?\d+(?:\.\d+)?)/ // Regex for identifying exponentials (x ^ y)
let mul = /((?:\-)?\d+(?:\.\d+)?) ?\* ?((?:\-)?\d+(?:\.\d+)?)/ // Regex for identifying multiplication (x * y)
let div = /((?:\-)?\d+(?:\.\d+)?) ?\/ ?((?:\-)?\d+(?:\.\d+)?)/ // Regex for identifying division (x / y)
let add = /((?:\-)?\d+(?:\.\d+)?) ?\+ ?((?:\-)?\d+(?:\.\d+)?)/ // Regex for identifying addition (x + y)
let sub = /((?:\-)?\d+(?:\.\d+)?) ?- ?((?:\-)?\d+(?:\.\d+)?)/  // Regex for identifying subtraction (x - y)
let sqrt = /√(-?\d+)\b/
let Sine = /\bsin (-?\d+)\b/
let cosine = /\bcos (-?\d+)\b/
let tangent = /\btan (-?\d+)\b/
let logaritm = /\blog (-?\d+)\b/

function replaceTrigonometrics(expr: string): any {
    if (isNaN(Number(expr))) {
        if (Sine.test(expr)) {
            let newExpr = expr.replace(Sine, function (match, base): any {
                return Math.sin(Number(base));
            });
            return replaceTrigonometrics(newExpr);
        }
        else if (cosine.test(expr)) {
            let newExpr = expr.replace(cosine, function (match, base): any {
                return Math.cos(Number(base));
            });
            return replaceTrigonometrics(newExpr);
        }
        else if (tangent.test(expr)) {
            let newExpr = expr.replace(tangent, function (match, base): any {
                return Math.tan(Number(base));
            });
            return replaceTrigonometrics(newExpr);
        }
        else if (logaritm.test(expr)) {
            let newExpr = expr.replace(logaritm, function (match, base): any {
                return Math.log(Number(base));
            });
            return replaceTrigonometrics(newExpr);
        }
        else {
            return expr;
        }
    }
}
function evaluate(expr: string): any {
    if (isNaN(Number(expr))) {
        if (parens.test(expr)) {
            let newExpr = expr.replace(parens, function (match, subExpr) {
                return evaluate(subExpr);
            });
            return evaluate(newExpr);
        }
        
        else if (exp.test(expr)) {
            let newExpr = expr.replace(exp, function (match, base, pow): any {
                return Math.pow(Number(base), Number(pow));
            });
            return evaluate(newExpr);
        }
        else if (sqrt.test(expr)) {
            let newExpr = expr.replace(sqrt, function (match, a): any {
                return Math.sqrt(a);
            });
            return evaluate(newExpr);
        }
        else if (mul.test(expr)) {
            let newExpr = expr.replace(mul, function (match, a, b): any {
                return Number(a) * Number(b);
            });
            return evaluate(newExpr);
        }
        else if (div.test(expr)) {
            let newExpr = expr.replace(div, function (match, a, b): any {
                if (b != 0)
                    return Number(a) / Number(b);
                else
                    throw new Error('Division by zero');
            });
            return evaluate(newExpr);
        }
        else if (add.test(expr)) {
            let newExpr = expr.replace(add, function (match, a, b): any {
                return Number(a) + Number(b);
            });
            return evaluate(newExpr);
        }
        else if (sub.test(expr)) {
            let newExpr = expr.replace(sub, function (match, a, b): any {
                return Number(a) - Number(b);
            });
            return evaluate(newExpr);
        }
       
        else {
            return expr;
        }
    }
    return Number(expr);
}


const calculate = (expr: string): any => {
    const newExp = replaceTrigonometrics(expr);
    const finalExp = evaluate(newExp);
    return finalExp
}
export default calculate;