/*
Javascript responsável por máscaras usando o componente "jquery.meiomask.js" (docs em: http://www.meiocodigo.com/projects/meiomask/)
Para usar basta aplicar a classe no input.

Criado por: Grécio Beline
Em: Abril de 2014
*/


$(function () {
  
    $(".mask-Data").setMask({ mask: '99/99/9999', autoTab: false });
    //$(".mask-Data").datepicker({ format: 'dd/mm/yyyy' });

    $(".mask-DataHora").setMask({ mask: '99/99/9999 99:99', autoTab: false });

    $(".mask-DataMaiorAtual").setMask({ mask: '99/99/9999', autoTab: false });
    //$(".mask-DataMaiorAtual").datepicker({ format: 'dd/mm/yyyy' });

    $(".mask-DataMenorAtual").setMask({ mask: '99/99/9999', autoTab: false });
    //$(".mask-DataMenorAtual").datepicker({ format: 'dd/mm/yyyy' });

    $(".mask-DataAMD").setMask({ mask: '9999/99/99', autoTab: false });
    //$(".mask-DataAMD").datepicker({ format: 'yyyy/mm/dd' });

    $(".mask-DataAmericana").setMask({ mask: '99/99/9999', autoTab: false });
    //$(".mask-DataAmericana").datepicker({ format: 'mm/dd/yyyy' });

    $(".mask-Hora").setMask({ mask: '99:99:99', autoTab: false });
    $(".mask-HoraCurta").setMask({ mask: '99:99', autoTab: false });

    $(".mask-NumeroInteiro").setMask({ mask: '999999999', autoTab: false });
    $('.mask-Moeda').setMask({ mask: '99,999.999.999.999.9', type: 'reverse', autoTab: false });
    $(".mask-MoedaPrecisaoFour").setMask({ mask: '9999,999.999.999.999.9', type: 'reverse', autoTab: false });

    $(".mask-RG").setMask({ mask: '9.999.999', autoTab: false });
    $(".mask-Telefone").setMask({ mask: '(99)9999.9999', autoTab: false });
    $(".mask-DDD").setMask({ mask: '999', autoTab: false });
    $(".mask-Fone").setMask({ mask: '9999-9999', autoTab: false });
    $(".mask-Placa").setMask({ mask: '', autoTab: false });

    $(".mask-CPF").setMask({ mask: '999.999.999-99', autoTab: false });
    $(".mask-CNPJ").setMask({ mask: '99.999.999/9999-99', autoTab: false });
    $(".mask-InscricaoEstadual").setMask({ mask: '99.999.999-9', autoTab: false });
    $(".mask-CnpjCpf").setMask({ mask: '99999999999999', autoTab: false });
    $(".mask-CnpjCpfIe").setMask({ mask: '99999999999999', autoTab: false });

    $(".mask-SerieNfe").setMask({ mask: '99.999.999/9999-99', autoTab: false });

    $(".mask-ChaveDFe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveNFe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveCTe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveCTeOS").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveBpe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveNFCe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveMDFe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });
    $(".mask-ChaveNFAe").setMask({ mask: '99999999999999999999999999999999999999999999', autoTab: false });

    $(".mask-ProtocoloParcelamento").setMask({ mask: '99999999999999/9999-99', autoTab: false });

    $(".mask-CEP").setMask({ mask: '99.999-999', autoTab: false });
    
    $(".mask-cnpj").setMask({ mask: '99.999.999/9999-99' });
    $(".mask-cpf").setMask({ mask: '999.999.999-99' });
    $(".mask-data").setMask({ mask: '99/99/9999' });
    $(".mask-hora").setMask({ mask: '99:99' });
    $(".mask-cep").setMask({ mask: '99999-999' });
    $('.mask-val').setMask({ mask: '99,999.999.999.999', type: 'reverse', defaultValue: '+000' },
        $(this).focus(function () { $(this).value })
    );

    $('.mask-numero').keyup(function () {
        if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });

    $('.mask-cnpjcpf').keypress(function () {
        $(".mask-cnpjcpf").setMask({ mask: '99999999999999', autoTab: false });

        if ($(this).val().length > 10) {
            $(".mask-cnpjcpf").setMask({ mask: '99.999.999/9999-99', autoTab: false });
        }
        else {
            $('.mask-cnpjcpf').setMask({ mask: '999.999.999-99', autoTab: false });
        }
    });

    $('.mask-protocolo').setMask({ mask: '999999/9999-9', autoTab: false });
});
