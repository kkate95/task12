module.exports = function(Post) {
    Post.on('attached', function () {
        Post.create({name: "News1", description: 'В JavaScript любые текстовые данные являются строками.' +
        'Не существует отдельного типа «символ», который есть в ряде других языков.Внутренним форматом строк,' +
        ' вне зависимости от кодировки страницы, является Юникод (Unicode).', likes_count: 3});
        Post.create({name: "News2", description: 'Чтобы найти все вхождения подстроки, нужно запустить indexOf в цикле. ' +
        'Как только получаем очередную позицию – начинаем следующий поиск со следующей.', likes_count: 2});
        Post.create({name: "News3", description: 'Различие между substring и slice – в том, как они работают с ' +
        'отрицательными и выходящими за границу строки аргументами:substring(start, end)Отрицательные аргументы' +
        ' интерпретируются как равные нулю. Слишком большие значения усекаются до длины строки.', likes_count: 5});
    });
};