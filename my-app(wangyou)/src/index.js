import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';


import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//公司基本信息store
import companyStore from './modules/baseInfo/companyInfo/store';

//文档管理store
import documentStore from './modules/document/document/store';

const stores = {
    companyStore,
    documentStore
}

ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <div style={{ width: '100%', height: '100%' }}>
                <App />
            </div>
        </HashRouter>
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
