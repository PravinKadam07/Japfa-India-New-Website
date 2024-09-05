import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	fetchMediaPageArticles,
	modifyPathHtml,
	modifyPath
} from '../../../utils/fetchFromApi';
interface ArticleInterface {
	articleTitle: string;
	articleDate: string;
	articleHtml: string;
	bannerImg: string;
}

const Article = () => {
	const { articleId } = useParams();
	const [article, setarticle] = useState<ArticleInterface>();
	useEffect(() => {
		fetchMediaPageArticles()
			.then((data) => {
				console.log(data);

				const currentarticle = data.filter(
					(item: any) =>
						parseInt(item.id) ===
						parseInt(articleId ? articleId : '0'),
				);

				setarticle({
					articleTitle: currentarticle[0].acf.title,
					articleDate: currentarticle[0].acf['article_date'],
					articleHtml: modifyPathHtml(
						currentarticle[0].acf['article_detail'],
					),
					bannerImg: currentarticle[0].acf.thumbnail,
				});
				// console.log(article?.articleHtml)
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="mx-2 my-[40px] max-w-[920px] md:mx-auto md:my-[60px] lg:my-[100px]">
			<div>
				<h1 className="mb-3 text-[28px] font-extrabold md:mb-6 md:text-[40px]">
					{article?.articleTitle}
				</h1>
				<div className="mb-[30px] flex justify-between lg:mb-[60px]">
					<div className="flex gap-6 text-[20px] font-normal text-[#807B78]">
						<p>{article?.articleDate}</p>
					</div>
					{/* <img src={blog_share_icon} alt="Share" className='cursor-pointer' /> */}
				</div>
				<img
					src={modifyPath(
						article?.bannerImg ? article.bannerImg : '',
					)}
					alt="Banner"
					className="mb-14"
				/>
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: article?.articleHtml ? article?.articleHtml : '',
				}}
			></div>
		</div>
	);
};

export default Article;
