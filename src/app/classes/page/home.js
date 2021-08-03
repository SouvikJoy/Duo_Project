import { Component, mixins } from 'nuxt-property-decorator';
import NuxioPress from '~/app/classes/nuxiopress';
import TopNav from '~/components/common/TopNav';

@Component({
  components: {
    TopNav
  }
})
export default class Home extends mixins(NuxioPress) {

}
