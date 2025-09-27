
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';

export default function TheoryScreen() {
  const [isPurchaseSheetVisible, setIsPurchaseSheetVisible] = useState(false);

  const courseModules = [
    {
      title: 'Betting Fundamentals',
      duration: '2 hours',
      lessons: 8,
      topics: [
        'Understanding odds and probability',
        'Types of bets explained',
        'Reading betting markets',
        'Basic terminology'
      ]
    },
    {
      title: 'Bankroll Management',
      duration: '1.5 hours',
      lessons: 6,
      topics: [
        'Setting your betting budget',
        'Unit sizing strategies',
        'Risk management principles',
        'Long-term sustainability'
      ]
    },
    {
      title: 'Value Betting',
      duration: '2.5 hours',
      lessons: 10,
      topics: [
        'Identifying value in odds',
        'Expected value calculations',
        'Market inefficiencies',
        'Comparative analysis'
      ]
    },
    {
      title: 'Advanced Strategies',
      duration: '3 hours',
      lessons: 12,
      topics: [
        'Arbitrage betting',
        'Hedging strategies',
        'Live betting tactics',
        'System betting approaches'
      ]
    },
    {
      title: 'Psychology & Discipline',
      duration: '1.5 hours',
      lessons: 7,
      topics: [
        'Emotional control',
        'Avoiding common biases',
        'Maintaining discipline',
        'Handling losses'
      ]
    },
    {
      title: 'Sports Analysis',
      duration: '2 hours',
      lessons: 9,
      topics: [
        'Statistical analysis methods',
        'Form and performance metrics',
        'Team and player analysis',
        'Market movement interpretation'
      ]
    }
  ];

  const courseFeatures = [
    {
      icon: 'play-circle-outline',
      title: 'Video Lessons',
      description: '40+ high-quality video lessons with practical examples'
    },
    {
      icon: 'document-text-outline',
      title: 'PDF Materials',
      description: 'Comprehensive guides and cheat sheets for quick reference'
    },
    {
      icon: 'help-circle-outline',
      title: 'Interactive Quizzes',
      description: 'Test your knowledge with quizzes after each module'
    },
    {
      icon: 'ribbon-outline',
      title: 'Certificate',
      description: 'Receive a completion certificate upon finishing the course'
    },
    {
      icon: 'time-outline',
      title: 'Lifetime Access',
      description: 'Access course materials anytime, anywhere, forever'
    },
    {
      icon: 'chatbubbles-outline',
      title: 'Community Access',
      description: 'Join our exclusive community of betting enthusiasts'
    }
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
          <Text style={commonStyles.subtitle}>Betting Theory</Text>
          <View style={{ width: 60 }} />
        </View>

        {/* Hero Section */}
        <View style={[commonStyles.section, { paddingTop: 32 }]}>
          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt, alignItems: 'center' }]}>
            <Icon name="school-outline" size={64} color={colors.primary} />
            <Text style={[commonStyles.title, { textAlign: 'center', marginTop: 16 }]}>
              Complete Betting Course
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 8 }]}>
              Master the theoretical foundations of professional betting with our comprehensive course
            </Text>
            <View style={[commonStyles.priceTag, { marginTop: 16 }]}>
              <Text style={[commonStyles.priceText, { fontSize: 20 }]}>$149</Text>
            </View>
          </View>
        </View>

        {/* Course Overview */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Course Overview</Text>
          
          <View style={commonStyles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
              <View style={commonStyles.centerContent}>
                <Text style={[commonStyles.title, { color: colors.primary }]}>12+</Text>
                <Text style={commonStyles.textSecondary}>Hours Content</Text>
              </View>
              <View style={commonStyles.centerContent}>
                <Text style={[commonStyles.title, { color: colors.primary }]}>52</Text>
                <Text style={commonStyles.textSecondary}>Video Lessons</Text>
              </View>
              <View style={commonStyles.centerContent}>
                <Text style={[commonStyles.title, { color: colors.primary }]}>6</Text>
                <Text style={commonStyles.textSecondary}>Modules</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={buttonStyles.primary}
              onPress={() => setIsPurchaseSheetVisible(true)}
            >
              <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                Enroll Now - $149
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Course Modules */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Course Modules</Text>
          
          {courseModules.map((module, index) => (
            <View key={index} style={[commonStyles.card, { marginBottom: 16 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <View style={{ flex: 1 }}>
                  <Text style={[commonStyles.text, { fontWeight: '600' }]}>
                    Module {index + 1}: {module.title}
                  </Text>
                  <Text style={[commonStyles.textSecondary, { marginTop: 4 }]}>
                    {module.duration} • {module.lessons} lessons
                  </Text>
                </View>
              </View>
              
              <View>
                <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
                  What you&apos;ll learn:
                </Text>
                {module.topics.map((topic, topicIndex) => (
                  <View key={topicIndex} style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    marginBottom: 6 
                  }}>
                    <Icon name="checkmark-circle-outline" size={16} color={colors.success} />
                    <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
                      {topic}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Course Features */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>What&apos;s Included</Text>
          
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {courseFeatures.map((feature, index) => (
              <View key={index} style={[commonStyles.card, { 
                width: '48%', 
                marginBottom: 16,
                paddingVertical: 20,
                alignItems: 'center'
              }]}>
                <Icon name={feature.icon as any} size={32} color={colors.primary} />
                <Text style={[commonStyles.text, { fontWeight: '600', textAlign: 'center', marginTop: 12 }]}>
                  {feature.title}
                </Text>
                <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 8 }]}>
                  {feature.description}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Student Success */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Student Success Stories</Text>
          
          <View style={commonStyles.card}>
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
              {[...Array(5)].map((_, starIndex) => (
                <Icon key={starIndex} name="star" size={16} color={colors.warning} style={{ marginRight: 2 }} />
              ))}
            </View>
            <Text style={[commonStyles.text, { marginBottom: 12, fontStyle: 'italic' }]}>
              &quot;This course completely transformed my understanding of betting. The theoretical foundation 
              helped me develop a systematic approach that increased my success rate by 60%.&quot;
            </Text>
            <Text style={[commonStyles.textSecondary, { fontWeight: '600' }]}>
              - Alex Rodriguez, Course Graduate
            </Text>
          </View>
          
          <View style={[commonStyles.card, { marginTop: 16 }]}>
            <View style={{ flexDirection: 'row', marginBottom: 12 }}>
              {[...Array(5)].map((_, starIndex) => (
                <Icon key={starIndex} name="star" size={16} color={colors.warning} style={{ marginRight: 2 }} />
              ))}
            </View>
            <Text style={[commonStyles.text, { marginBottom: 12, fontStyle: 'italic' }]}>
              &quot;The psychology module was a game-changer. Learning to control emotions and maintain 
              discipline has been crucial to my long-term success.&quot;
            </Text>
            <Text style={[commonStyles.textSecondary, { fontWeight: '600' }]}>
              - Maria Santos, Professional Bettor
            </Text>
          </View>
        </View>

        {/* FAQ */}
        <View style={commonStyles.section}>
          <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Frequently Asked Questions</Text>
          
          <View style={commonStyles.card}>
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
              How long do I have access to the course?
            </Text>
            <Text style={[commonStyles.textSecondary, { marginBottom: 16 }]}>
              You have lifetime access to all course materials, including any future updates.
            </Text>
            
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
              Is this suitable for beginners?
            </Text>
            <Text style={[commonStyles.textSecondary, { marginBottom: 16 }]}>
              Absolutely! The course starts with fundamentals and progressively covers advanced topics.
            </Text>
            
            <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
              Do you offer a money-back guarantee?
            </Text>
            <Text style={commonStyles.textSecondary}>
              Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with the course.
            </Text>
          </View>
        </View>

        {/* Bottom CTA */}
        <View style={[commonStyles.section, { paddingBottom: 40 }]}>
          <View style={[commonStyles.card, { backgroundColor: colors.primary, alignItems: 'center' }]}>
            <Text style={[commonStyles.subtitle, { color: colors.background, textAlign: 'center', marginBottom: 12 }]}>
              Ready to Master Betting Theory?
            </Text>
            <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginBottom: 20 }]}>
              Join hundreds of successful students who have transformed their betting approach
            </Text>
            <TouchableOpacity 
              style={[buttonStyles.primary, { backgroundColor: colors.background }]}
              onPress={() => setIsPurchaseSheetVisible(true)}
            >
              <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
                Enroll Now - $149
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Purchase Bottom Sheet */}
      <SimpleBottomSheet
        isVisible={isPurchaseSheetVisible}
        onClose={() => setIsPurchaseSheetVisible(false)}
      >
        <View style={{ padding: 20 }}>
          <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 20 }]}>
            Enroll in the Course
          </Text>
          
          <View style={[commonStyles.card, { backgroundColor: colors.backgroundAlt, marginBottom: 20 }]}>
            <Icon name="school-outline" size={32} color={colors.primary} style={{ alignSelf: 'center', marginBottom: 12 }} />
            <Text style={[commonStyles.text, { textAlign: 'center', marginBottom: 8, fontWeight: '600' }]}>
              Complete Betting Theory Course
            </Text>
            <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginBottom: 12 }]}>
              12+ hours of content • 52 lessons • Lifetime access
            </Text>
            <Text style={[commonStyles.title, { color: colors.primary, textAlign: 'center' }]}>
              $149
            </Text>
          </View>
          
          <TouchableOpacity style={[buttonStyles.primary, { marginBottom: 12 }]}>
            <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
              Purchase Course
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={buttonStyles.outline}>
            <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600' }]}>
              Preview Sample Lesson
            </Text>
          </TouchableOpacity>
          
          <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginTop: 16, fontSize: 12 }]}>
            30-day money-back guarantee • Secure payment processing
          </Text>
        </View>
      </SimpleBottomSheet>
    </SafeAreaView>
  );
}
