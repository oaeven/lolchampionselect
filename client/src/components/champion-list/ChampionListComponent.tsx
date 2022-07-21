import React, { useState, useEffect, FC } from 'react';
import ChampionService from '../../services/ChampionService';
import { ChampionSummary } from '../../services/Types';

const ChampionListComponent: FC<{ }> = ({ }) => {
    const [championList, setChampionList] = useState<ChampionSummary[]>([]);

    

    useEffect(() => {
        const championList = ChampionService.getChampionList();
        setChampionList(championList);

        console.log('use effect set champion list');

        // Update the document title using the browser API
    });

    const championElements = championList.map((championSummary, key) => {
        return (
            <div>{championSummary.name}</div>
        )
    });

    return (
        <div>
            {championElements}
        </div>
    );
}

export default ChampionListComponent;



// //represents the blog frontpage with url /blog
// export default function BlogPageTemplate(data) {
//     const blogPostList = data.pageContext.posts;

//     const blogPostElements = blogPostList.map((blogPost, key) => {
//         return (
//             <BlogCard key={key} blogPost={blogPost.frontmatter}></BlogCard>
//         )
//     });

//     return (
//         <Layout>
//             <SEO title="Home" />
//             <h2>Blog Posts</h2>
//             <div className="mt-3">{blogPostElements}</div>
//         </Layout>
//     )
// }
