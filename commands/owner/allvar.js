import Heroku from "heroku-client";

const Allvar = async(client, m, text, Owner, NotOwner, herokuapi, appname) => {

if (!Owner) return m.reply(NotOwner);

const heroku = new Heroku({
                                token: herokuapi,
                        });

let baseURI = "/apps/" + appname;

let mok = await heroku.get(baseURI+'/config-vars')

let mf = '*𝙱𝙴𝙻𝚃𝙰𝙷 𝚃𝙴𝙲𝙷 𝙷𝙴𝚁𝙾𝙺𝚄 𝚅𝙰𝚁𝙸𝙰𝙱𝙻𝙴𝚂*\n\n'
for (let dread in mok) {
mf+= '😎 *'+dread+'* '+'= '+mok[dread]+'\n'
}
 m.reply(mf)

}

export default Allvar;
