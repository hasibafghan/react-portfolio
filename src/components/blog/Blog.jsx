import BlogItem from './BlogItem'
import './Blog.css'
import BlogImage1 from '../../assets/images/post-1.jpg'
import BlogImage2 from '../../assets/images/post-2.jpg'
import BlogImage3 from '../../assets/images/post-3.jpg'


let objects = [
    {
        'BlogImage': BlogImage1,
        'BlogTitle' : 'post title 1',
        'BlogDesc'  : 'Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa, convallis a pellentesque nec,egestas non nisi',
        'BlogAuthor': 'Hasib Afghan',
        'BlogTime' : '22 min'
    },
    {
        'BlogImage': BlogImage2,
        'BlogTitle' : 'post title 2',
        'BlogDesc'  : 'Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa, convallis a pellentesque nec,egestas non nisi',
        'BlogAuthor': 'Jahan Alimi',
        'BlogTime' : '23 min'
    },
    {
        'BlogImage': BlogImage3,
        'BlogTitle' : 'post title 3',
        'BlogDesc'  : 'Proin eget tortor risus. Pellentesque in ipsum id orci portadapibus Praesent sapien massa, convallis a pellentesque nec,egestas non nisi',
        'BlogAuthor': 'Ali Ahmadi',
        'BlogTime' : '8 min'
    },
]



function Blog() {
  return (
    // <!-- blog -->
    <section id="blog">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">BLOG</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
            <BlogItem {...objects[0]}></BlogItem>
            <BlogItem {...objects[1]}></BlogItem>
            <BlogItem {...objects[2]}></BlogItem>

        </div>
      </div>
    </section>
  );
}

export default Blog