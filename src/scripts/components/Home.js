import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');

        return (
            <div>
                <h2>Homepage Tester</h2>
                <img src="https://cdn-images-1.medium.com/max/1000/1*10rDJAvtCHTZz-NdIMpGLQ.jpeg" alt="wordpress banner"/>
                <h1>{pageData.title.rendered}</h1>
?
                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>
        );
    }
}

export default Home;
