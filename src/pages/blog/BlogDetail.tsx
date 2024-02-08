import styled from 'styled-components'
import HeadingSimple from '../../ui/HeadingSimple'
import FullScreenBackground from '../../ui/FullScreenBackground'
import MainContainer from '../../ui/MainContainer'
import DateLine from '../../ui/DateLine'

const Paragraph = styled.p`
  max-width: 40rem;
`

// TODO: write blogs. Also data will be served from backend
// as json, so the entire logic here needs to be implemented.
function BlogDetail() {
  return (
    <FullScreenBackground size='long' color='secondary'>
      <MainContainer>
        <DateLine>FEB 07 2024</DateLine>
        <HeadingSimple>Title of the Post!</HeadingSimple>
        <Paragraph>
          Vestibulum vitae purus odio. Aenean egestas, odio euismod vulputate auctor, purus sapien
          maximus metus, non sagittis velit urna at nisl. Nam consequat suscipit justo in venenatis.
          Sed gravida scelerisque orci, eget consequat purus consequat tristique. Duis ac dolor leo.
          Morbi aliquam scelerisque urna, vel placerat orci ultrices eu. Nunc sed aliquet lorem.
          Donec scelerisque molestie eros fringilla convallis. Cras vel tellus aliquet, ornare diam
          eu, elementum justo. Pellentesque pretium velit nec orci tincidunt eleifend. Vestibulum
          suscipit scelerisque dui. Fusce volutpat, purus in malesuada dignissim, ipsum nibh
          fringilla libero, at bibendum augue tortor sit amet dolor. Maecenas ut auctor tellus, et
          efficitur nunc. Integer iaculis dapibus enim ac fringilla. Praesent ultricies egestas
          cursus. In fringilla vitae ipsum at auctor. Nam pellentesque nibh vel orci sagittis, vitae
          vestibulum justo lacinia. Cras eget nulla mattis, lobortis nibh vel, laoreet erat. Nulla
          at mauris consequat, dapibus sem ac, commodo dui. Ut in sem accumsan, consectetur nulla
          nec, tincidunt ipsum. Aliquam congue ligula a lectus tincidunt, quis feugiat magna
          condimentum. Donec id porta dui. Integer ultricies sollicitudin lectus, nec congue arcu
          rhoncus id. Ut tincidunt nisi quis orci maximus, sit amet feugiat leo accumsan.
        </Paragraph>
        <Paragraph>
          Suspendisse venenatis, nisl sodales ultrices maximus, sapien felis maximus nisl, sed
          gravida leo enim sed sem. Aliquam erat volutpat. Mauris sed tortor ultrices, dignissim
          urna non, malesuada dolor. Pellentesque luctus, ante id euismod venenatis, ante libero
          imperdiet nisl, lacinia ullamcorper orci ex et ipsum. Maecenas at mattis neque. Nullam
          ligula urna, molestie sodales scelerisque id, pulvinar a arcu. Sed tincidunt laoreet
          neque, id faucibus felis luctus non. Vivamus a massa ipsum. Mauris sed ornare risus, eget
          egestas lorem. Sed mi massa, rhoncus vitae orci eget, mattis interdum libero. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam tempor
          libero at ipsum mattis blandit. Curabitur congue, mi eget interdum dapibus, purus ipsum
          pretium arcu, eu tincidunt libero erat at leo. Suspendisse id quam fermentum, maximus
          mauris vel, porttitor risus. In at luctus neque. Integer id dui ac nisl viverra finibus.
          Nulla luctus urna accumsan lacus vehicula convallis. Nunc dapibus placerat blandit. Etiam
          venenatis gravida erat eu pharetra. In hac habitasse platea dictumst. Nam imperdiet justo
          dignissim ex placerat, sit amet pharetra orci volutpat.
        </Paragraph>
        <Paragraph>
          Ut neque nulla, laoreet a turpis facilisis, tincidunt bibendum lacus. Curabitur at libero
          sit amet dolor gravida convallis. Maecenas sodales congue dui eget pulvinar. Ut accumsan,
          tortor ut ornare fringilla, urna magna efficitur velit, at molestie massa nibh quis
          tortor. Donec sit amet semper risus, vel vehicula ante. Nam a rutrum metus. Etiam mauris
          mi, viverra non molestie non, viverra eget justo. Etiam at magna ac urna bibendum
          fermentum ut nec erat. Donec elit lacus, vulputate at odio id, faucibus semper augue.
          Pellentesque ac odio auctor, molestie massa sed, eleifend odio. Etiam nec ante varius,
          efficitur odio sed, semper ex. Etiam vitae ligula a nibh consectetur pharetra at id nulla.
          Sed nec lectus lacus. Fusce vel pellentesque enim. In pulvinar condimentum tortor, vitae
          iaculis leo commodo sit amet. Integer a tortor neque. Morbi iaculis sodales odio, ac
          elementum mauris laoreet eget. Integer feugiat sit amet libero vel mattis. Ut vel ligula
          auctor libero mattis volutpat. Curabitur non ipsum elementum, mollis lorem vitae, mattis
          massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Quisque eget sollicitudin enim. Vestibulum imperdiet nulla vel aliquam
          pulvinar. Phasellus ac mollis tortor. Sed in laoreet eros. Integer at bibendum mauris.
          Etiam fermentum, nulla ac lacinia lobortis, mi arcu congue velit, sed facilisis tortor
          velit fringilla justo. Maecenas nec consectetur nibh. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu augue lacinia,
          fringilla felis sed, faucibus sapien. Duis vitae orci quis quam pellentesque iaculis.
          Mauris suscipit ligula eu metus rhoncus vestibulum. Donec lacinia sem eu blandit lacinia.
          Etiam eu sapien ut tortor egestas mattis quis ut risus. Sed maximus ex vitae nibh
          dignissim porta non vel ipsum. Vestibulum viverra, ex vitae luctus venenatis, arcu velit
          hendrerit est, eget suscipit enim ligula in quam. Fusce sapien lorem, pharetra in neque
          ut, ultricies posuere nisi. Sed in augue lectus. Etiam porttitor tincidunt mi mollis
          ullamcorper. Etiam blandit tincidunt molestie. Vivamus felis risus, egestas eu ullamcorper
          varius, placerat quis diam. Vestibulum ut egestas urna. Vivamus venenatis justo nec orci
          maximus venenatis. Nulla sit amet lectus sit amet diam placerat eleifend ac nec neque. Sed
          quis est sagittis, tempor ex quis, tempor lacus. Mauris ac purus ac magna porttitor
          laoreet eu at nulla. Donec sodales lectus non bibendum tempor. Ut pharetra facilisis orci
          et pharetra. Vivamus in urna rhoncus, rutrum mauris sed, semper dui. Sed suscipit ipsum
          vitae ante ultrices suscipit. Ut condimentum cursus ante nec facilisis. Donec fringilla ut
          urna sit amet posuere. Nam suscipit luctus elit faucibus tempus. Mauris et mi ac lectus
          condimentum interdum nec vitae orci.
        </Paragraph>
      </MainContainer>
    </FullScreenBackground>
  )
}

export default BlogDetail
