import React, { useMemo, useState } from "react";
import "./TabDetail.css";
import type { Industry } from "../../../types/industry";
import Button from "../Button";

interface TabDetailProp {
    tabs: Industry[];
}

const TabDetail: React.FC<TabDetailProp> = ({tabs}) => {
  const [activeKey, setActiveKey] = useState<string>(tabs[0].key);

  const activeTab = useMemo(() => {
    if (!tabs?.length) return null;
    return tabs.find((t) => t.key === activeKey) ?? tabs[0];
  }, [tabs, activeKey]);

  const handleTabClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="tabdetail-layout">
      {/* Sidebar Tabs */}
      <div className="tabdetail-tabs" role="tablist" aria-label="Industry tabs">
        {tabs.map((t) => {
          const isActive = t.key === activeKey;
          return (
            <Button
              key={t.key}
              className={`tabdetail-btn ${isActive ? "is-active" : ""}`}
              onClick={() => handleTabClick(t.key)}
              aria-selected={isActive}
              aria-controls={`panel-${t.key}`}
              ariaLabel={t.key}
            >
              {t.label}
            </Button>
          );
        })}
      </div>

      {/* Content */}
      <div className="tabdetail-content">
        <div
          className="tabdetail-panel"
          role="tabpanel"
          id={`panel-${activeTab?.key}`}
          aria-labelledby={`tab-${activeTab?.key}`}
        >
          <div className="tabdetail-panel-inner">
            <div className="tabdetail-text">
              <p className="tabdetail-paragraph">{activeTab?.description}</p>
            </div>

            {activeTab?.imageUrl ? (
              <img
                className="tabdetail-image"
                src={activeTab.imageUrl}
                alt={activeTab.alt || activeTab.label}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}


export default TabDetail;