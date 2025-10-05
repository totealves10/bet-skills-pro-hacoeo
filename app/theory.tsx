
import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles, colors, buttonStyles } from '../styles/commonStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Icon from '../components/Icon';
import SimpleBottomSheet from '../components/BottomSheet';
import { LinearGradient } from 'expo-linear-gradient';

export default function TheoryScreen() {
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [showEnrollSheet, setShowEnrollSheet] = useState(false);

  const courseModules = [
    {
      id: 1,
      title: 'Betting Fundamentals',
      duration: '2 hours',
      lessons: 8,
      description: 'Learn the basic concepts and terminology of sports betting',
      topics: [
        'Understanding odds and probability',
        'Types of bets explained',
        'Reading betting markets',
        'Basic bankroll management'
      ]
    },
    {
      id: 2,
      title: 'Statistical Analysis',
      duration: '3 hours',
      lessons: 12,
      description: 'Master the art of analyzing sports data and statistics',
      topics: [
        'Key performance indicators',
        'Historical data analysis',
        'Trend identification',
        'Statistical modeling basics'
      ]
    },
    {
      id: 3,
      title: 'Value Betting',
      duration: '2.5 hours',
      lessons: 10,
      description: 'Identify and capitalize on value opportunities in betting markets',
      topics: [
        'What is value betting?',
        'Calculating expected value',
        'Finding market inefficiencies',
        'Value betting strategies'
      ]
    },
    {
      id: 4,
      title: 'Risk Management',
      duration: '2 hours',
      lessons: 9,
      description: 'Protect your bankroll with advanced risk management techniques',
      topics: [
        'Kelly Criterion explained',
        'Position sizing strategies',
        'Diversification techniques',
        'Loss management psychology'
      ]
    },
    {
      id: 5,
      title: 'Advanced Strategies',
      duration: '4 hours',
      lessons: 15,
      description: 'Professional betting strategies used by successful bettors',
      topics: [
        'Arbitrage betting',
        'Matched betting',
        'Trading strategies',
        'Live betting techniques'
      ]
    },
    {
      id: 6,
      title: 'Psychology & Discipline',
      duration: '1.5 hours',
      lessons: 6,
      description: 'Master the mental game of professional betting',
      topics: [
        'Emotional control',
        'Avoiding common biases',
        'Discipline strategies',
        'Long-term mindset'
      ]
    }
  ];

  const courseStats = {
    totalDuration: '15 hours',
    totalLessons: 60,
    totalModules: 6,
    certificate: true
  };

  const handleEnrollCourse = () => {
    console.log('Enrolling in betting theory course');
    setShowEnrollSheet(true);
  };

  const handleModuleSelect = (module: any) => {
    console.log('Selected module:', module.title);
    setSelectedModule(module);
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
          <Text style={commonStyles.subtitle}>Betting Theory</Text>
          <View style={{ width: 60 }} />
        </View>

        <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
          {/* Hero Section */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <View style={commonStyles.heroCard}>
              <Icon name="school-outline" size={48} color={colors.background} />
              <Text style={[commonStyles.subtitle, { color: colors.background, textAlign: 'center', marginTop: 16 }]}>
                Complete Betting Course
              </Text>
              <Text style={[commonStyles.textSecondary, { color: colors.background, textAlign: 'center', marginTop: 8 }]}>
                Master professional betting with our comprehensive theory course
              </Text>
            </View>
          </View>

          {/* Course Overview */}
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Course Overview</Text>
            
            <View style={commonStyles.statsContainer}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>
                    {courseStats.totalModules}
                  </Text>
                  <Text style={commonStyles.textSecondary}>Modules</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>
                    {courseStats.totalLessons}
                  </Text>
                  <Text style={commonStyles.textSecondary}>Lessons</Text>
                </View>
                <View style={commonStyles.centerContent}>
                  <Text style={[commonStyles.title, { color: colors.primary }]}>
                    {courseStats.totalDuration}
                  </Text>
                  <Text style={commonStyles.textSecondary}>Duration</Text>
                </View>
              </View>
              
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ribbon-outline" size={20} color={colors.primary} />
                <Text style={[commonStyles.text, { marginLeft: 8, fontWeight: '600' }]}>
                  Certificate of Completion Included
                </Text>
              </View>
            </View>
          </View>

          {/* Course Modules */}
          <View style={commonStyles.section}>
            <Text style={[commonStyles.subtitle, { marginBottom: 20 }]}>Course Modules</Text>
            
            {courseModules.map((module) => (
              <TouchableOpacity 
                key={module.id} 
                style={[
                  commonStyles.serviceCard,
                  selectedModule?.id === module.id && { borderColor: colors.primary, borderWidth: 2 }
                ]}
                onPress={() => handleModuleSelect(module)}
              >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 }}>
                  <View style={{ 
                    backgroundColor: colors.backgroundGradientStart, 
                    padding: 12, 
                    borderRadius: 12, 
                    marginRight: 16,
                    minWidth: 48,
                    alignItems: 'center'
                  }}>
                    <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '700' }]}>
                      {module.id}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={commonStyles.subtitle}>{module.title}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 4 }}>
                      <Text style={[commonStyles.textSecondary, { marginRight: 16 }]}>
                        {module.duration}
                      </Text>
                      <Text style={commonStyles.textSecondary}>
                        {module.lessons} lessons
                      </Text>
                    </View>
                  </View>
                </View>
                
                <Text style={[commonStyles.text, { marginBottom: 16 }]}>
                  {module.description}
                </Text>
                
                <View style={{ marginBottom: 16 }}>
                  <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
                    Topics Covered:
                  </Text>
                  {module.topics.map((topic, index) => (
                    <View key={index} style={{ 
                      flexDirection: 'row', 
                      alignItems: 'center', 
                      marginBottom: 6 
                    }}>
                      <Icon name="play-circle-outline" size={14} color={colors.primary} />
                      <Text style={[commonStyles.textSecondary, { marginLeft: 8, flex: 1 }]}>
                        {topic}
                      </Text>
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Pricing */}
          <View style={[commonStyles.section, { paddingVertical: 32 }]}>
            <View style={commonStyles.serviceCard}>
              <View style={{ alignItems: 'center', marginBottom: 24 }}>
                <Text style={[commonStyles.subtitle, { marginBottom: 8 }]}>
                  Complete Course Access
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={[commonStyles.title, { color: colors.primary, fontSize: 32 }]}>
                    249€
                  </Text>
                  <Text style={[commonStyles.textSecondary, { marginLeft: 8 }]}>
                    one-time payment
                  </Text>
                </View>
              </View>
              
              <View style={{ marginBottom: 24 }}>
                <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 12 }]}>
                  What You Get:
                </Text>
                {[
                  'Lifetime access to all modules',
                  'Downloadable PDF materials',
                  'Interactive quizzes',
                  'Certificate of completion',
                  'Monthly live Q&A sessions'
                ].map((feature, index) => (
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
                style={buttonStyles.primary}
                onPress={handleEnrollCourse}
              >
                <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                  Enroll Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom padding */}
          <View style={{ height: 40 }} />
        </ScrollView>

        {/* Enrollment Bottom Sheet */}
        <SimpleBottomSheet
          isVisible={showEnrollSheet}
          onClose={() => setShowEnrollSheet(false)}
        >
          <View style={{ padding: 20 }}>
            <Text style={[commonStyles.subtitle, { textAlign: 'center', marginBottom: 16 }]}>
              Enroll in Course
            </Text>
            
            <View style={[commonStyles.card, { marginBottom: 20 }]}>
              <Text style={[commonStyles.text, { fontWeight: '600', marginBottom: 8 }]}>
                Betting Theory Complete Course
              </Text>
              <Text style={[commonStyles.text, { color: colors.primary, fontWeight: '600', marginBottom: 8 }]}>
                249€ - One-time payment
              </Text>
              <Text style={commonStyles.textSecondary}>
                Lifetime access to all {courseStats.totalLessons} lessons across {courseStats.totalModules} modules
              </Text>
            </View>
            
            <Text style={[commonStyles.textSecondary, { textAlign: 'center', marginBottom: 20 }]}>
              Ready to master professional betting? Contact us to enroll and get instant access to the complete course.
            </Text>
            
            <TouchableOpacity style={buttonStyles.primary}>
              <Text style={[commonStyles.text, { color: colors.background, fontWeight: '600' }]}>
                Complete Enrollment
              </Text>
            </TouchableOpacity>
          </View>
        </SimpleBottomSheet>
      </SafeAreaView>
    </View>
  );
}
