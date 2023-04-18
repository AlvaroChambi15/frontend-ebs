import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, LazyLoadEvent, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { SolicitudesService } from 'src/app/core/services/citas/solicitudes.service';

// import { LazyLoadEvent } from 'primeng/api';

/* interface solicitudLoad {
  rowPage: number | null;
  searchSoli: string | null;
  SearchEstado: string | null;
} */

interface Solicitud {
  nombres: any;
  descripcion: any;
  contacto: any;
  fechaSoli: any;
  horaSoli: any;
  estado: any;
}

@Component({
  selector: 'app-lista-solicitud',
  templateUrl: './lista-solicitud.component.html',
  styleUrls: ['./lista-solicitud.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ConfirmationService, MessageService],
})

export class ListaSolicitudComponent implements OnInit {

  // ---------------------------------------------------------
  modalDetalleSoli = false;
  sasa: any;
  // ---------------------------------------------------------


  soliLoad = {
    rowPage: 5,
    searchSoli: "null",
    searchEstado: "null"
  };

  statuses = [
    { label: 'SOLICITUD', value: 'SOLICITUD', style: 'new' },
    { label: 'POR CONFIRMAR', value: 'POR CONFIRMAR', style: 'negotiation' },
    { label: 'CANCELADO', value: 'CANCELADO', style: 'unqualified' },
    // { label: 'B', value: 'b', style: 'qualified' },
    // { label: 'E', value: 'e', style: 'renewal' },
    // { label: 'F', value: 'f', style: 'proposal' }
  ]

  especialidades = [
    { label: 'CONSULTA GENERAL', value: 'CONSULTA GENERAL' },
    { label: 'LIMPIEZA DENTAL', value: 'LIMPIEZA DENTAL' },
    { label: 'BLANQUEAMIENTO DENTAL', value: 'BLANQUEAMIENTO DENTAL' },
    { label: 'ENDODONCIA', value: 'ENDODONCIA' },
    { label: 'ORTODONCIA', value: 'ORTODONCIA' },
    { label: 'PROTESIS', value: 'PROTESIS' },
    { label: 'OTRO', value: 'CANCELADO' },
    // { label: 'B', value: 'b', style: 'qualified' },
    // { label: 'E', value: 'e', style: 'renewal' },
    // { label: 'F', value: 'f', style: 'proposal' }
  ]

  totalRecords!: number;
  page = 1;
  // rowsPage = { "row": "5" };

  coche = {
    marca: "Peugeot",
    modelo: "207",
    combustible: [2, "diesel"],
  }

  rangeDates!: Date[];

  search!: string;
  // searchSoli = { "search"};

  loading!: boolean;

  perfil: any;

  solicitudes: any;
  solicitudesPagination: any;
  totalSolicitudes!: any;

  // subscription: Subscription;



  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService, private solicitudesService: SolicitudesService) {
    // this.translateChange('es')

    /* translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    let lang = browserLang!.match(/en|fr/) ? browserLang : 'en';
    this.changeLang(lang!);

    this.subscription = this.translate.stream('primeng').subscribe(data => {
      this.primeNGConfig.setTranslation(data);
    }); */

    this.translateChange('es')
  }

  translateChange(lang: string) {
    this.translateService.use(lang)
    this.translateService.get('primeng').subscribe((res) => this.primengConfig.setTranslation(res))
  }

  /*   translateChange(lang: string) {
      this.translateService.use(lang)
      this.translateService.get('primeng').subscribe((res) => this.primeNGConfig.setTranslation(res))
    } */

  ngOnInit(): void {

    // alert(JSON.stringify(this.soliLoad))

    // this.loading = true;
    // let datos = JSON.stringify(this.soliLoad);
    // this.getSolicitudes(this.page, this.soliLoad);
  }

  getSolicitudes(page: any, datos: any) {
    this.loading = true;

    /* let rows = this.rowsPage;
    console.log("datosdeGetSolicitudes:" + datos); */

    // let dato1 = JSON.stringify(this.soliLoad);

    // let dato2 = JSON.stringify(this.soliLoad);

    // console.log("DATO1:" + dato1);
    // console.log("DATO2:" + dato2);


    this.solicitudesService.showSoicitudes(page, datos).subscribe(
      (res: any) => {
        this.solicitudesPagination = res;
        this.solicitudes = res.data;

        this.totalSolicitudes = res.total;
        this.totalRecords = res.total;

        // this.loading = false;
        console.log("holi");
        console.log(res.total);

        console.log(res)
        this.loading = false;

      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  clear(table: Solicitud) {
    // table.clear();
  }

  editProduct(solicitud: Solicitud) {
    console.log(solicitud);

  }

  deleteProduct(solicitud: Solicitud) {
    console.log(solicitud);


  }

  loadSolicitudes(event: LazyLoadEvent) {
    this.loading = true;

    console.log(event);

    console.log(event.rows);
    let rows = event.rows;
    // this.rowsPage = { "row": "" + rows };

    console.log("aqui");

    // console.log(event.globalFilter);


    /* if (event.globalFilter === null) {
      alert("ES NULL");
      this.soliLoad = {
        rowPage: rows!,
        searchSoli: null,
        SearchEstado: "como"
      }

    } else {
      alert("NO ES NULL");

      this.soliLoad = {
        rowPage: rows!,
        searchSoli: event.globalFilter?.value,
        SearchEstado: "como"
      }
    } */

    this.soliLoad = {
      rowPage: rows!,
      searchSoli: event.globalFilter?.value,
      searchEstado: event.filters!['status']?.value
    }

    console.log(JSON.stringify(this.soliLoad));



    console.log("THIIS");

    console.log(event);
    // console.log(event!.globalFilter!.value!);

    // console.log(this.soliLoad);

    console.log('EL VALUE DE FILTER STADO ES:' + event.filters!['status']?.value);




    let page = (event.first! / event.rows!) + 1

    this.getSolicitudes(page, this.soliLoad);
    /*  setTimeout(() => {
       this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then(res => {
         this.customers = res.customers;
         this.totalRecords = res.totalRecords;
         this.loading = false;
       })
     }, 1000); */
  }

  // searchSolicitudes()
  /*   prevPage() {
      this.service.getBookingsAtUrl(this.bookings.prev_page_url).then(bookings=>this.bookings = bookings);
    }

    nextPage() {
      this.service.getBookingsAtUrl(this.bookings.next_page_url).then(bookings=>this.bookings = bookings);
    } */


  openModalDetalleSoli(solicitudA: { value: any; }) {
    // this.solicitud = solicitudA;
    this.sasa = solicitudA;
    // this.sasa = { ...solicitudA };
    console.log(this.sasa);

    this.modalDetalleSoli = true;
  }

  getFechaNac(edad: any) {
    let actualYear = new Date().getFullYear();

    return actualYear - edad;
  }

  closeModalDetalleSoli() {
    this.modalDetalleSoli = false;

  }


}
