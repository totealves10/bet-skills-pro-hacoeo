
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';

export default function TipsScreen() {
  const [isSubscriptionSheetVisible, setIsSubscriptionSheetVisible] = useState(false);

  const subscriptionPlans = [
    {
      title: 'Basic Tips',
      price: '$29/month',
      description: 'Daily betting tips with basic analysis',
      features: [
        '3-5 daily tips',
        'Basic match analysis',
        'Win/Loss tracking',
        'Email delivery',
        'Mobile app access'
      ],
      popular: false
    },
    {
      title: 'Premium Tips',
      price: '$49/month',
      description: 'Enhanced tips with detailed analysis and multiple sports',
      features: [
        '5-8 daily tips',
        'Detailed analysis',
        'Multiple sports coverage',
        'Live updates',
        'Priority support',
        'Historical data access'
      ],
      popular: true
    },
    {
      title: 'VIP Package',
      price: '$99/month',
      description: 'Complete package with exclusive tips and personal consultation',
      features: [
        '8-12 daily tips',
        'Exclusive VIP tips',
        'Personal consultation',
        'Custom strategies',
        'Direct messaging',
        'Weekly strategy calls'
      ],
      popular: false
    }
  ];

  const sampleTips = [
    {
      match: 'Manchester United vs Liverpool',
      sport: 'Football',
      tip: 'Over 2.5 Goals',
      odds: '1.85',
      confidence: 'High',
      analysis: 'Both teams have strong attacking records and weak defenses recently.'
    },
    {
      match: 'Lakers vs Warriors',
      sport: 'Basketball',
      tip: 'Lakers +5.5',
      odds: '1.90',
      confidence: 'Medium',
      analysis: 'Lakers playing at home with key players returning from injury.'
    }
  ];

  const stats = [
    { label: 'Monthly Win Rate', value: '78%', icon: 'trending-up-outline' },
    { label: 'Average Odds', value: '1.85', icon: 'calculator-outline' },
    { label: 'Tips Delivered', value: '2,500+', icon: 'paper-plane-outline' },
    { label: 'Active Subscribers', value: '850+', icon: 'people-outline' }
  ];

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
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

        {/* Hero Section */}
        <View style={[commonStyles.section, { paddingTop: 32 }]}>
          <View style={[commonStyles.card, { backgroundColor: colors.primary, alignItems: 'center' }]}>
            <Icon name="trending-up-outline" size={64} color={colors.background} />
            <Text style={[commonStyles.title, { color: colors.background, textAlign: 'center', marginTop: 16 }]}>
              Premium Daily Tips
            </Text>
            <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginTop: 8 }]}>
              Professional betting tips with detailed analysis delivered daily to your inbox
            </Text>
          </View>
        </View>

        {/* Performance Stats */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20, textAlign: 'center' }]}>
            Our Track Record
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {stats.map((stat, index) => (
              <View key={index} style={[commonStyles.card, { 
                width: '48%', 
                alignItems: 'center', 
                marginBottom: 16,
                paddingVertical: 20
              }]}>
                <Icon name={stat.icon as any} size={32} color={colors.primary} />
                <Text style={[commonStyles.title, { color: colors.primary, marginTop: 12 }]}>
                  {stat.value}
                </Text>
                <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 4 }]}>
                  {stat.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sample Tips */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Sample Tips</Text>
          
          {sampleTips.map((tip, index) => (
            <View key={index} style={[commonStyles.card, { marginBottom: 16 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <View style={{ flex: 1 }}>
                  <Text style={[commonStyles.text, { fontWeight: '600' }]}>{tip.match}</Text>
                  <Text style={[commonStyles.textSecondary, { marginTop: 4 }]}>{tip.sport}</Text>
                </View>
                <View style={[commonStyles.priceTag, { 
                  backgroundColor: tip.confidence === 'High' ? colors.success : 
                                  tip.confidence === 'Medium' ? colors.warning : colors.textSecondary 
                }]}>
                  <Text style={[commonStyles.priceText, { fontSize: 12 }]}>{tip.confidence}</Text>
                </View>
              </View>
              
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <Text style={[commonStyles.text, { fontWeight: '600', color: colors.primary }]}>
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

        {/* Subscription Plans */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Choose Your Plan</Text>
          
          {subscriptionPlans.map((plan, index) => (
            <View key={index} style={[
              commonStyles.serviceCard,
              plan.popular && { borderColor: colors.primary, borderWidth: 2 }
            ]}>
              {plan.popular && (
                <View style={[commonStyles.priceTag, { 
                  position: 'absolute', 
                  top: -10, 
                  right: 20,
                  backgroundColor: colors.primary
                }]}>
                  <Text style={[commonStyles.priceText, { fontSize: 12 }]}>POPULAR</Text>
                </View>
              )}
              
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <View style={{ flex: 1 }}>
                  <Text style={commonStyles.subtitle}>{plan.title}</Text>
                  <Text style={[commonStyles.textSecondary, { marginTop: 4 }]}>
                    {plan.description}
                  </Text>
                </View>
                <Text style={[commonStyles.title, { color: colors.primary }]}>
                  {plan.price}
                </Text>
              </View>
              
              <View style={{ marginBottom: 20 }}>
                {plan.features.map((feature, featureIndex) => (
                  <View key={featureIndex} style={{ 
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
                  plan.popular && { backgroundColor: colors.primary }
                ]}
                onPress={() => setIsSubscriptionSheetVisible(true)}
              >
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                  Subscribe Now
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* How It Works */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>How It Works</Text>
          
          <View style={commonStyles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Icon name="mail-outline" size={24} color={colors.primary} style={{ marginRight: 16 }} />
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Daily Delivery</Text>
                <Text style={commonStyles.textSecondary}>Tips delivered to your email every morning</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Icon name="analytics-outline" size={24} color={colors.primary} style={{ marginRight: 16 }} />
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Detailed Analysis</Text>
                <Text style={commonStyles.textSecondary}>Each tip includes comprehensive match analysis</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
              <Icon name="phone-portrait-outline" size={24} color={colors.primary} style={{ marginRight: 16 }} />
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Mobile Access</Text>
                <Text style={commonStyles.textSecondary}>Access tips anytime through our mobile app</Text>
              </View>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name="bar-chart-outline" size={24} color={colors.primary} style={{ marginRight: 16 }} />
              <View style={{ flex: 1 }}>
                <Text style={[commonStyles.text, { fontWeight: '600' }]}>Performance Tracking</Text>
                <Text style={commonStyles.textSecondary}>Track your wins and losses with detailed statistics</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Bottom padding */}
        <View style={{ height: 40 }} />
      </ScrollView>

      {/* Subscription Bottom Sheet */}
      <SimpleBottomSheet
        isVisible={isSubscriptionSheetVisible}
        onClose={() => setIsSubscriptionSheetVisible(false)}
      >
        <View style={{ padding: 20 }}>
          <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 20 }]}>
            Start Your Subscription
          </Text>
          
          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt, marginBottom: 20 }]}>
            <Icon name="gift-outline" size={32} color={colors.primary} style={{ alignSelf: 'center', marginBottom: 12 }} />
            <Text style={[commonStyles.text, { textAlign: 'center', marginBottom: 8, fontWeight: '600' }]}>
              7-Day Free Trial
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center' }]}>
              Try our premium tips for free. Cancel anytime during the trial period.
            </Text>
          </View>
          
          <TouchableOpacity style={[buttonStyles.primary, { marginBottom: 12 }]}>
            <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
              Start Free Trial
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={buttonStyles.outline}>
            <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
              View Sample Tips
            </Text>
          </TouchableOpacity>
        </View>
      </SimpleBottomSheet>
    </SafeAreaView>
  );
}
