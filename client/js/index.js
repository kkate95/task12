import '../css/index.css';
import IndexRouter from './routers/index';
import ForumRouter from './routers/navigate';
import TopMenu from './views/top-menu/menu';
import 'quill/dist/quill.snow.css';

new TopMenu({el: '.top_menu'});
const router = new IndexRouter();
const nav = new ForumRouter();
Backbone.history.start({pushState: true});
