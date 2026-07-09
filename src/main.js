const groups = {
  tier1: [
    {
      name: "My Efficient Electric Home (MEEH)",
      members: "163K",
      desc: "The single most valuable group. Australia-wide energy efficiency. Heavy Brisbane participation — constant solar quotes, battery discussions, bill comparisons, retailer advice. These people are your exact customer.",
      url: "https://www.facebook.com/groups/MyEfficientElectricHome/"
    },
    {
      name: "Solar Forum Australia",
      members: "Large",
      desc: "National solar group. Brisbane posts on installer recommendations, 6.6kW system performance, north vs east/west orientation, 3-phase inverters. Active purchase-mode users.",
      url: "https://www.facebook.com/groups/solarforumaustralia/"
    },
    {
      name: "Australian Solar Power and Battery Storage Q&A",
      members: "Large",
      desc: "Q&A format. 'Is this quote reasonable?' and 'Which inverter?' questions. Perfect for demonstrating expertise by answering technical questions helpfully.",
      url: "https://www.facebook.com/groups/solarqanda/"
    },
    {
      name: "Off Grid Solar Australia",
      members: "Niche",
      desc: "Off-grid setups, panels, batteries. Relevant for rural/acreage properties around Brisbane outskirts. Smaller but very engaged audience.",
      url: "https://www.facebook.com/groups/1107093146293564/"
    }
  ],
  tier2: [
    {
      name: "Brisbane Renovators",
      members: "Large",
      desc: "Brisbane-specific renovations: structural work, decks, extensions. Solar comes up when people are doing major work and already spending $50K+. Natural add-on conversation.",
      url: "https://www.facebook.com/groups/BrisbaneRenovators/"
    },
    {
      name: "New Home Builders Brisbane",
      members: "Large",
      desc: "New builds in Brisbane. Solar is mandatory on new QLD builds but people still choose their installer. Extension and upgrade opportunities.",
      url: "https://www.facebook.com/groups/newhomebuilders/"
    },
    {
      name: "Queenslander Houses Renovations",
      members: "Large",
      desc: "Pre-WWII Queenslander and character home renovations. Unique roof challenges where solar expertise differentiates. A heritage-specific value prop.",
      url: "https://www.facebook.com/groups/514822522569231/"
    },
    {
      name: "HomeBuilder Queensland",
      members: "Medium",
      desc: "HomeBuilder grant discussions. Budget-conscious but spending. Good for messaging about solar as a cost-saver on new builds and major renos.",
      url: "https://www.facebook.com/groups/homebuilderqld/"
    }
  ],
  tier3: [
    {
      name: "Brisbane (brisbane1)",
      members: "Very large",
      desc: "Largest general Brisbane group. Resident chat, events, local happenings. Recommendation requests for tradies and services are common.",
      url: "https://www.facebook.com/groups/brisbane1/"
    },
    {
      name: "Brisbane Community Board",
      members: "Large",
      desc: "Advertising, selling, local info, community posts. High post volume. People ask for service recommendations here regularly.",
      url: "https://www.facebook.com/groups/1482305052080137/"
    },
    {
      name: "Brisbane Northside Community Group",
      members: "Large",
      desc: "Northside locals connecting, asking for tradie recommendations, supporting local businesses. ConnectEnergy is north Brisbane — home turf.",
      url: "https://www.facebook.com/groups/1503311646588277/"
    },
    {
      name: "Brisbane Northside Community Noticeboard",
      members: "Medium",
      desc: "Active northside noticeboard. Questions, local advice, community contributions. Another northside channel for name recognition.",
      url: "https://www.facebook.com/groups/833899526659786/"
    },
    {
      name: "South Brisbane Community Page",
      members: "Medium",
      desc: "Southside community activities, events, discussions. Expands CE's reach beyond northside into the full Brisbane market.",
      url: "https://www.facebook.com/groups/241367311253036/"
    },
    {
      name: "Brisbane CBD Community",
      members: "Medium",
      desc: "CBD and inner suburbs. Different solar conversation here — apartment dwellers, body corporate constraints, but also high-value inner-city homeowners.",
      url: "https://www.facebook.com/groups/243927426123434/"
    }
  ],
  tier4: [
    {
      name: "Morningside / Cannon Hill / Murarrie Community Connect",
      members: "Small",
      desc: "Active eastern suburbs group. Local recommendations carry weight. Neighbours trust neighbours.",
      url: "https://www.facebook.com/groups/4540245542666521/"
    },
    {
      name: "4007 Ascot, Clayfield & Surrounding Suburbs",
      members: "Small",
      desc: "Affluent northside: Ascot, Hamilton, Clayfield, Hendra. High home ownership, high solar ROI demographic. These are premium-install customers.",
      url: "https://www.facebook.com/groups/574952263361245/"
    },
    {
      name: "Albany Creek Connect",
      members: "Small",
      desc: "Albany Creek and surrounds. Family-heavy suburb, high solar uptake area. Strong community feel.",
      url: "https://www.facebook.com/groups/1586649858110355/"
    },
    {
      name: "Brisbane Small Business",
      members: "Medium",
      desc: "B2B angle. Commercial solar installs. Different conversation but higher contract values. Could open a whole new revenue stream.",
      url: "https://www.facebook.com/groups/brisbanesmallbusiness/"
    }
  ]
};

const STORAGE_KEY = 'ce-fb-groups-checked';

function getChecked() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));
  } catch { return new Set(); }
}

function saveChecked(set) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
}

function makeId(name) {
  return name.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

function renderCard(group, tier) {
  const id = makeId(group.name);
  const checked = getChecked().has(id);

  const card = document.createElement('div');
  card.className = 'group-card' + (checked ? ' checked' : '');
  card.style.animationDelay = '0s';
  card.setAttribute('data-group-id', id);

  card.innerHTML = `
    <div class="checkbox">
      <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
    </div>
    <div class="card-content">
      <div class="card-title">
        ${group.name}
        ${group.members ? `<span class="member-count">${group.members}</span>` : ''}
      </div>
      <div class="card-desc">${group.desc}</div>
      <a href="${group.url}" target="_blank" rel="noopener" class="card-link" onclick="event.stopPropagation()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Open in Facebook
      </a>
    </div>
  `;

  card.addEventListener('click', () => {
    const checkedSet = getChecked();
    if (checkedSet.has(id)) {
      checkedSet.delete(id);
    } else {
      checkedSet.add(id);
    }
    saveChecked(checkedSet);
    card.classList.toggle('checked');
    updateProgress();
  });

  return card;
}

function updateProgress() {
  const total = Object.values(groups).flat().length;
  const checked = getChecked().size;
  document.getElementById('progress-text').textContent = `${checked}/${total}`;
}

function init() {
  for (const [tier, groupList] of Object.entries(groups)) {
    const container = document.getElementById(tier);
    groupList.forEach((g, i) => {
      const card = renderCard(g, tier);
      card.style.animationDelay = `${i * 0.06}s`;
      container.appendChild(card);
    });
  }
  updateProgress();

  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('Clear all checkboxes? This resets your progress.')) {
      localStorage.removeItem(STORAGE_KEY);
      document.querySelectorAll('.group-card').forEach(c => c.classList.remove('checked'));
      updateProgress();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
