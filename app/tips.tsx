
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function TipsScreen() {
  const [selectedTier, setSelectedTier] = useState<any>(null);
  const [showSubscriptionSheet, setShowSubscriptionSheet] = useState(false);

  const subscriptionTiers = [
    {
      id: 'basic',
      title: 'Basic Tips',
      price: '$29',
      period: '/month',
      description: 'Essential daily betting tips with basic analysis',
      features: [
        '3-5 daily tips',
        'Basic match analysis',
        'Win/Loss tracking',
        'Email delivery',
        'Mobile notifications'
      ],
      popular: false
    },
    {
      id: 'premium',
      title: 'Premium Tips',
      price: '$59',
      period: '/month',
      description: 'Advanced tips with detailed analysis and multiple sports',
      features: [
        '8-12 daily tips',
        'Detailed statistical analysis',
        'Multiple sports coverage',
        'Live updates',
        'Telegram group access',
        'Weekly performance reports',
        'Risk assessment'
      ],
      popular: true
    },
    {
      id: 'vip',
      title: 'VIP Package',
      price: '$99',
      period: '/month',
      description: 'Premium tips plus exclusive access and personal support',
      features: [
        'Everything in Premium',
        '15+ daily tips',
        'Exclusive high-value bets',
        'Personal WhatsApp support',
        'Live betting guidance',
        'Monthly strategy calls',
        'Custom bet requests'
      ],
      popular: false
    }
  ];

  /*
  const sampleTips = [
    {
      match: 'Manchester United vs Liverpool',
      tip: 'Over 2.5 Goals',
      odds: '1.85',
      confidence: 'High',
      analysis: 'Both teams have strong attacking records and weak defenses recently.'
    },
    {
      match: 'Lakers vs Warriors',
      tip: 'Lakers +5.5',
      odds: '1.90',
      confidence: 'Medium',
      analysis: 'Lakers playing at home with key players returning from injury.'
    },
    {
      match: 'Real Madrid vs Barcelona',
      tip: 'BTTS Yes',
      odds: '1.75',
      confidence: 'High',
      analysis: 'El Clasico historically sees goals from both sides.'
    }
  ];
*/
  const handleSubscribe = (tier: any) => {
    console.log('Subscribing to tier:', tier.title);
    setSelectedTier(tier);
    setShowSubscriptionSheet(true);
  };

  return (
    <View style={commonStyles.container}>
      <LinearGradient
        colors={[colors.backgroundGradientStart, colors.backgroundGradientEnd]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={commonStyles.gradientBackground}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header */}
        <View style={commonStyles.header}>
          <Link href="/" asChild>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="chevron-back-outline" size={24} color={colors.text} />
              <Text style={[commonStyles.text, { marginLeft: 8 }]}>Back</Text>
            </TouchableOpacity>
          </Link>
          <Text style={commonStyles.subtitle}>Daily Bet Tips</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <View style={commonStyles.heroCard}>
              <Icon name="trending-up-outline" size={48} color={colors.background} />
              <Text style={[commonStyles.subtitle, { color: colors.background, textAlign: 'center', marginTop: 16 }]}>
                Premium Betting Tips
              </Text>
              <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginTop: 8 }]}>
                Daily expert predictions with detailed analysis and high success rates
              </Text>
            </View>
          </View>
          {/* Sample Tips */}
          
          {/* 
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Today&apos;s Sample Tips</Text>
            
            {sampleTips.map((tip, index) => (
              <View key={index} style={commonStyles.card}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <Text style={[commonStyles.text, { fontWeight: '600', flex: 1 }]}>
                    {tip.match}
                  </Text>
                  <View style={[
                    commonStyles.priceTag,
                    { backgroundColor: tip.confidence === 'High' ? colors.success : colors.warning }
                  ]}>
                    <Text style={[commonStyles.priceText, { fontSize: 12 }]}>
                      {tip.confidence}
                    </Text>
                  </View>
                </View>
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
                  <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
                    {tip.tip}
                  </Text>
                  <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                    Odds: {tip.odds}
                  </Text>
                </View>
                
                <Text style={commonStyles.textSecondary}>
                  {tip.analysis}
                </Text>
              </View>
            ))}
          </View>

          /}

          {/* Subscription Tiers */}
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Choose Your Plan</Text>
            
            {subscriptionTiers.map((tier) => (
              <View key={tier.id} style={[
                commonStyles.serviceCard,
                tier.popular && { borderColor: colors.primary, borderWidth: 2 }
              ]}>
                {tier.popular && (
                  <View style={{
                    position: 'absolute',
                    top: -10,
                    right: 20,
                    backgroundColor: colors.primary,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 12,
                  }}>
                    <Text style={[commonStyles.textSecondary, { color: colors.background, fontSize: 12, fontWeight: '600' }]}>
                      MOST POPULAR
                    </Text>
                  </View>
                )}
                
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.subtitle}>{tier.title}</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      <Text style={[commonStyles.title, { color: colors.primary, fontSize: 24 }]}>
                        {tier.price}
                      </Text>
                      <Text style={[commonStyles.textSecondary, { marginLeft: 4 }]}>
                        {tier.period}
                      </Text>
                    </View>
                  </View>
                </View>
                
                <Text style={[commonStyles.text, { marginBottom: 16 }]}>
                  {tier.description}
                </Text>
                
                <View style={{ marginBottom: 20 }}>
                  {tier.features.map((feature, index) => (
                    <View key={index} style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginBottom: 8 
                    }}>
                      <Icon name="checkmark-circle-outline" size={16} color={colors.success} />
                      <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>
                
                <TouchableOpacity 
                  style={[
                    buttonStyles.primary,
                    tier.popular && { backgroundColor: colors.primary }
                  ]}
                  onPress={() => handleSubscribe(tier)}
                >
                  <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                    Subscribe Now
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Performance Stats */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 24 }]}>
              Our Track Record
            </Text>
            <View style={commonStyles.statsContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>78%</Text>
                  <Text style={commonStyles.textSecondary}>Win Rate</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>2.1</Text>
                  <Text style={commonStyles.textSecondary}>Avg Odds</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>+15%</Text>
                  <Text style={commonStyles.textSecondary}>Monthly ROI</Text>
                </View>
              </View>
              
              <Text style={[commonStyles.textSecondary, { textAlign: 'center' }]}>
                Based on last 6 months performance across all subscription tiers
              </Text>
            </View>
          </View>

          {/* Bottom padding */}
          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Subscription Bottom Sheet */}
        <SimpleBottomSheet
          isVisible={showSubscriptionSheet}
          onClose={() => setShowSubscriptionSheet(false)}
        >
          <View style={{ padding: 20 }}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 16 }]}>
              Subscribe to Tips
            </Text>
            
            {selectedTier && (
              <>
                <View style={[commonStyles.card, { marginBottom: 20 }]}>
                  <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
                    {selectedTier.title}
                  </Text>
                  <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600', marginBottom: 8 }]}>
                    {selectedTier.price}{selectedTier.period}
                  </Text>
                  <Text style={commonStyles.textSecondary}>
                    {selectedTier.description}
                  </Text>
                </View>
                
                <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginBottom: 20 }]}>
                  Ready to start receiving premium betting tips? Contact us to set up your subscription and payment method.
                </Text>
                
                <TouchableOpacity style={buttonStyles.primary}>
                  <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                    Start Subscription
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </SimpleBottomSheet>
      </SafeAreaView>
    </View>
  );
}
