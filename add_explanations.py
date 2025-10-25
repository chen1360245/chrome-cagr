#!/usr/bin/env python3
"""
为所有语言的messages.json添加explanation翻译
"""

import json
import os

# 定义所有语言的explanation翻译
explanations = {
    'fr': {
        'explanationCAGR': {
            'message': "Votre investissement de $PV$ a atteint $FV$ en $N$ ans, avec un TCAC de $R$% par an.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "Votre investissement de $PV$ avec une croissance de $R$% par an atteindra $FV$ dans $N$ ans.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "Pour atteindre $FV$ dans $N$ ans avec un taux de croissance de $R$%, vous devez investir $PV$ aujourd'hui.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "Faire croître $PV$ à $FV$ avec une croissance annuelle de $R$% prendra $N$ ans.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'es': {
        'explanationCAGR': {
            'message': "Su inversión de $PV$ creció a $FV$ durante $N$ años, logrando una TCAC del $R$% anual.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "Su inversión de $PV$ creciendo al $R$% anual alcanzará $FV$ en $N$ años.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "Para alcanzar $FV$ en $N$ años con una tasa de crecimiento del $R$%, necesita invertir $PV$ hoy.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "Hacer crecer $PV$ a $FV$ con un crecimiento anual del $R$% tomará $N$ años.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'de': {
        'explanationCAGR': {
            'message': "Ihre Investition von $PV$ wuchs auf $FV$ über $N$ Jahre mit einer CAGR von $R$% pro Jahr.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "Ihre $PV$ Investition mit $R$% jährlichem Wachstum erreicht $FV$ in $N$ Jahren.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "Um $FV$ in $N$ Jahren mit einer Wachstumsrate von $R$% zu erreichen, müssen Sie heute $PV$ investieren.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "Das Wachstum von $PV$ auf $FV$ mit $R$% jährlichem Wachstum dauert $N$ Jahre.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'ja': {
        'explanationCAGR': {
            'message': "$PV$の投資が$N$年で$FV$に成長し、年率$R$%のCAGRを達成しました。",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "$PV$の投資が年率$R$%で成長すると、$N$年後に$FV$に達します。",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "$N$年で$R$%の成長率で$FV$に達するには、今日$PV$を投資する必要があります。",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "$PV$を$FV$に、年率$R$%で成長させるには$N$年かかります。",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'ko': {
        'explanationCAGR': {
            'message': "$PV$의 투자가 $N$년 동안 $FV$로 성장하여 연간 $R$%의 CAGR을 달성했습니다.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "$PV$의 투자가 연간 $R$%로 성장하면 $N$년 후 $FV$에 도달합니다.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "$N$년 내에 $R$%의 성장률로 $FV$에 도달하려면 오늘 $PV$를 투자해야 합니다.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "$PV$를 $FV$로, 연간 $R$% 성장률로 키우는 데 $N$년이 걸립니다.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'pt_BR': {
        'explanationCAGR': {
            'message': "Seu investimento de $PV$ cresceu para $FV$ ao longo de $N$ anos, alcançando um CAGR de $R$% ao ano.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "Seu investimento de $PV$ crescendo a $R$% ao ano alcançará $FV$ em $N$ anos.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "Para alcançar $FV$ em $N$ anos com uma taxa de crescimento de $R$%, você precisa investir $PV$ hoje.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "Crescer $PV$ para $FV$ com crescimento anual de $R$% levará $N$ anos.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    },
    'ar': {
        'explanationCAGR': {
            'message': "نما استثمارك من $PV$ إلى $FV$ على مدى $N$ سنة، محققًا معدل نمو سنوي مركب $R$٪.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'n': {'content': '$3'}, 'r': {'content': '$4'}}
        },
        'explanationFV': {
            'message': "سينمو استثمارك البالغ $PV$ بمعدل $R$٪ سنويًا ليصل إلى $FV$ في $N$ سنة.",
            'placeholders': {'pv': {'content': '$1'}, 'r': {'content': '$2'}, 'n': {'content': '$3'}, 'fv': {'content': '$4'}}
        },
        'explanationPV': {
            'message': "للوصول إلى $FV$ في $N$ سنة بمعدل نمو $R$٪، تحتاج إلى استثمار $PV$ اليوم.",
            'placeholders': {'n': {'content': '$1'}, 'r': {'content': '$2'}, 'fv': {'content': '$3'}, 'pv': {'content': '$4'}}
        },
        'explanationTIME': {
            'message': "سيستغرق نمو $PV$ إلى $FV$ بمعدل نمو سنوي $R$٪ مدة $N$ سنة.",
            'placeholders': {'pv': {'content': '$1'}, 'fv': {'content': '$2'}, 'r': {'content': '$3'}, 'n': {'content': '$4'}}
        }
    }
}

def add_explanations_to_locale(lang_code):
    """为指定语言添加explanation翻译"""
    file_path = f"_locales/{lang_code}/messages.json"

    try:
        # 读取现有文件
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        # 添加explanation翻译
        if lang_code in explanations:
            for key, value in explanations[lang_code].items():
                data[key] = value

        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

        print(f"[OK] Added explanations to {lang_code}")
        return True
    except Exception as e:
        print(f"[ERROR] Failed to update {lang_code}: {e}")
        return False

def main():
    """主函数"""
    os.chdir("D:\\program files\\AIweb\\cagr-chrome")

    languages = ['fr', 'es', 'de', 'ja', 'ko', 'pt_BR', 'ar']

    print("Adding explanation translations to all languages...")
    print("-" * 50)

    for lang in languages:
        add_explanations_to_locale(lang)

    print("-" * 50)
    print("Done!")

if __name__ == "__main__":
    main()
