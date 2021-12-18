import React from 'react';
import {BsFillCalendarCheckFill} from 'react-icons/bs';
import {IoIosCopy} from 'react-icons/io';
// import Highlight from 'react-highlight';
import hero from '../../asssets/hero.png'
import '../../scss/ArticlePage.scss';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';

const ArticlePage = () => {
    return (
        <>
            <Navbar />
            <div className="ArticlePage">
                <div className='hero'>
                    <img src={hero} alt="Hero Title" />
                </div>
                {/* <Highlight language="java" innerHTML={true}>{'<p>Hello world</p>'}</Highlight> */}
                {/* <Highlight>
                {`function foo() { return 'bar' }`}
                </Highlight> */}

                <div className="article-header">
                    <h1>Topic of the article goes here Topic of the article goes here</h1>
                    <div className="date-div">
                        <div>
                            <span>
                                <BsFillCalendarCheckFill />
                            </span>
                            <span>
                                <h4>Nov 20, 2021</h4>
                            </span>
                            <span>
                                <h4>-</h4>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h4>10 mins read</h4>
                            </span>
                            <span>
                                <IoIosCopy className='copy-link'/>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='article-body'>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit laborum laudantium atque quam veritatis voluptate quis, excepturi doloremque aut illo qui alias in eos, esse quidem, perspiciatis rem facere natus unde omnis harum beatae nulla. Nesciunt laudantium provident reiciendis veniam, explicabo recusandae! Iste ipsa repudiandae illo recusandae accusamus ratione porro blanditiis aperiam nam non corrupti dolor odio officiis culpa, itaque aspernatur necessitatibus numquam. Suscipit eum in libero placeat ipsa, aspernatur illum cum exercitationem modi, quidem nihil consequuntur nemo, natus aperiam nesciunt perferendis eveniet sint similique sunt sit praesentium magni iusto. Quae, dolorem debitis corporis quis ad eaque nam voluptate iste quod excepturi maiores sed, provident atque in reprehenderit distinctio, nobis magnam. A pariatur reprehenderit libero odio voluptatibus ipsa itaque magnam hic esse non cupiditate quaerat rerum facilis molestias repudiandae, animi voluptatem optio fugit eos. Consequuntur quos saepe repellendus eius quaerat natus voluptates sed autem labore ad at,
                         temporibus ipsa adipisci beatae nam. Veritatis error omnis ad. Architecto, dolorum qui. Consequatur minima consequuntur, temporibus a minus quisquam assumenda nisi doloribus, vitae excepturi numquam tempora vero dolorem culpa eum aspernatur corrupti beatae quam nemo eaque distinctio. Illum possimus rem dolores quo at aliquam aperiam ex deleniti obcaecati animi tempore mollitia in fuga, natus recusandae consectetur explicabo ratione iusto, impedit quod, officiis assumenda nostrum non voluptatibus? Blanditiis optio facilis officia deserunt praesentium, sequi, harum nemo voluptatem sint nesciunt est inventore modi dolorum dolores atque suscipit omnis eveniet fuga laborum officiis et adipisci. Delectus deleniti corrupti amet ratione, in adipisci culpa praesentium exercitationem, placeat quis quas iure, facilis quia ipsa maxime voluptatum fugit! Repellendus exercitationem repellat ducimus perferendis impedit, possimus perspiciatis dolores porro corrupti, magni nobis fugiat odit natus incidunt quos laudantium, distinctio placeat. Optio deleniti porro repellat illo dolore fugit minima laboriosam, 
                         ullam modi illum soluta labore eum vel mollitia! Eum, neque exercitationem aliquam veritatis aliquid numquam dignissimos dolorem aperiam maiores molestiae dolore facere perferendis eaque autem praesentium molestias voluptatibus sit ipsam id ullam perspiciatis vitae, nihil fuga obcaecati! Quam dicta minima ipsa modi. Tempore sit vero veritatis sint facilis accusamus earum enim perferendis omnis veniam. Architecto quae est eum, harum corporis, dolore labore quia quod repellat accusamus nisi officiis non illo qui rem debitis dolores, necessitatibus impedit. Pariatur ex aperiam consectetur aliquid, nihil enim veniam beatae asperiores corrupti possimus voluptas quae sunt, molestias deleniti quisquam itaque consequuntur, dolorum ab nam qui non? Enim inventore quod sint, minus libero tempore, repellendus sequi consequatur, totam perferendis corrupti repellat! Enim ut, vel error dolorum facilis voluptatem. Cupiditate eaque dolorem dolores veniam numquam quo quisquam accusamus obcaecati velit earum repellat incidunt quaerat debitis eum, ab, cumque reiciendis laboriosam eveniet perspiciatis excepturi 
                         voluptatem voluptatum! A quidem illum similique, accusamus animi fugiat dignissimos obcaecati dolorum minus velit necessitatibus iure facilis, rem assumenda placeat sit! Nesciunt, cum earum, quo repudiandae saepe dolorum enim asperiores corrupti placeat dolor aspernatur. Exercitationem iure sint quaerat labore ad qui repellendus rem odio provident esse aliquam quos, consequuntur repellat, at minus mollitia, molestias in voluptas necessitatibus pariatur! Quasi, asperiores! Recusandae, aliquam, aspernatur at iusto ullam neque delectus officia ut, velit cumque natus itaque sed modi unde ratione esse tempore? Sed corporis accusamus, veritatis laudantium atque, beatae ducimus, facilis rerum eius maiores perspiciatis asperiores officiis exercitationem architecto reiciendis. Cupiditate mollitia eos vitae aperiam labore harum delectus, consequuntur voluptates, dignissimos voluptas autem aliquam minus voluptatibus odit temporibus illo officia incidunt iure earum dolorem quasi! Fugit molestiae, aliquid enim in soluta vitae quam ad odio similique eaque. Cupiditate enim neque autem placeat reprehenderit 
                         aspernatur minima, error nisi, accusantium, vel iste. Dicta fuga culpa officia porro incidunt! Vitae labore possimus quos minima aspernatur, doloribus eos blanditiis repudiandae ipsum, nihil odio sed assumenda odit. Quisquam voluptatum, perspiciatis eos placeat sequi blanditiis magnam distinctio unde id dignissimos et nam. Culpa doloremque illo obcaecati, optio est aperiam asperiores consectetur molestiae. Quo tempora officiis veritatis in quisquam ducimus quae est suscipit mollitia nesciunt odit, numquam, neque vel voluptas omnis voluptatem. Ipsum voluptatum harum at officia! Inventore rem dolorem architecto veritatis, minus alias fugiat illo similique molestiae velit tempora ducimus quo at ratione eum ipsam aut culpa repudiandae non soluta. Voluptates illo cupiditate nesciunt omnis, incidunt quibusdam tempore corporis, temporibus fugit obcaecati et odit delectus! Commodi quod consequuntur culpa odit veniam maiores ullam sint iste aperiam nemo excepturi modi inventore expedita rem possimus ipsa, in, qui accusamus ipsum quibusdam? Temporibus repellendus ex nemo, nihil itaque voluptatibus rem 
                         dolores magnam non! Labore est asperiores quo harum facilis, expedita deleniti nobis fuga quam explicabo nulla rem qui perferendis tenetur nesciunt et, fugit veritatis eaque laborum veniam quaerat dolor laudantium laboriosam architecto! Ratione ullam nemo facilis, dolor rerum doloribus optio, odio molestias ipsam, alias nisi at fugiat. Eius autem repellat ut illo nobis rem cupiditate tempore nulla debitis beatae, dicta quae, blanditiis aspernatur odit voluptates eum culpa voluptas quidem voluptatem? Nemo recusandae soluta aperiam nostrum dicta nobis voluptatibus nisi reiciendis, iusto ipsum reprehenderit vero distinctio vel provident veritatis. Optio quasi eligendi animi nemo consequuntur inventore totam excepturi saepe molestias esse expedita, architecto nobis nesciunt. Porro doloremque voluptatum quis dolores, in saepe sit tenetur quibusdam nam nemo adipisci ipsam, minus dignissimos fugiat placeat inventore deserunt perferendis modi enim rerum quidem, veniam et aliquam alias. Commodi esse ipsam ipsa quidem eaque quos sequi similique, a cumque pariatur vitae, eveniet, at excepturi ex ab! Veniam 
                         adipisci optio nemo dolor perferendis deserunt aut, animi earum labore eum pariatur corrupti magnam quisquam debitis iusto cum. Nihil ea mollitia blanditiis dolor laboriosam similique eveniet, asperiores minima, voluptatem modi odio corporis quaerat obcaecati. Temporibus, voluptatibus earum! Quasi architecto consequatur deserunt rem et mollitia, laboriosam ab quae voluptates aliquid earum eveniet quis reprehenderit harum? Quaerat vitae quibusdam unde maiores itaque dolor veniam sapiente ex beatae quisquam voluptate nobis cupiditate libero facilis veritatis, repudiandae explicabo similique delectus ducimus architecto iure alias aspernatur quod! Possimus nisi soluta laudantium, eum tenetur omnis nihil, nostrum consectetur commodi quam cupiditate quas quia vel iusto. Eos temporibus repellendus laudantium iste numquam neque voluptatum recusandae quam amet eius alias aut qui nemo aliquam iure asperiores, magni laborum, provident ipsam animi!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ArticlePage;