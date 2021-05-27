import React from 'react';

import LatestPublications from './LatestPublications';
import Workspaces from './Workspaces';
import Comments from './Comments';


class Home extends React.Component {
    
    render() {
        return(
            <>
                <LatestPublications />
                <Workspaces />
                <Comments />
            </>
        )
    }
}

export default Home;