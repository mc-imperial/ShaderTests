; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 103
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %92
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %17 "slope"
               OpName %19 "coord"
               OpName %22 "gl_FragCoord"
               OpName %26 "refh"
               OpName %30 "tex"
               OpName %43 "h"
               OpName %76 "GLF_live1_looplimiter1"
               OpName %92 "_GLF_color"
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %30 RelaxedPrecision
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %31 RelaxedPrecision
               OpDecorate %33 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %44 RelaxedPrecision
               OpDecorate %46 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %49 RelaxedPrecision
               OpDecorate %69 RelaxedPrecision
               OpDecorate %71 RelaxedPrecision
               OpDecorate %72 RelaxedPrecision
               OpDecorate %92 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 0
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 2
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 0.00390625
         %15 = OpConstantComposite %11 %14 %14
         %16 = OpTypePointer Function %10
         %18 = OpConstant %10 0.0078125
         %20 = OpTypeVector %10 4
         %21 = OpTypePointer Input %20
         %22 = OpVariable %21 Input
         %27 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %28 = OpTypeSampledImage %27
         %29 = OpTypePointer UniformConstant %28
         %30 = OpVariable %29 UniformConstant
         %34 = OpTypeInt 32 0
         %35 = OpConstant %34 1
         %48 = OpConstant %10 1
         %57 = OpTypeBool
         %60 = OpConstant %6 32
         %74 = OpConstant %6 1
         %82 = OpConstantTrue %57
         %84 = OpConstant %6 6
         %91 = OpTypePointer Output %20
         %92 = OpVariable %91 Output
         %95 = OpConstant %10 0.03125
         %97 = OpTypeVector %10 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %43 = OpVariable %16 Function
         %76 = OpVariable %7 Function
               OpStore %8 %9
               OpStore %13 %15
               OpStore %17 %18
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
               OpStore %19 %25
         %31 = OpLoad %28 %30
         %32 = OpLoad %11 %19
         %33 = OpImageSampleImplicitLod %20 %31 %32
         %36 = OpCompositeExtract %10 %33 1
               OpStore %26 %36
         %37 = OpLoad %11 %13
         %38 = OpLoad %11 %19
         %39 = OpFSub %11 %38 %37
               OpStore %19 %39
         %40 = OpLoad %10 %17
         %41 = OpLoad %10 %26
         %42 = OpFAdd %10 %41 %40
               OpStore %26 %42
         %44 = OpLoad %28 %30
         %45 = OpLoad %11 %19
         %46 = OpImageSampleImplicitLod %20 %44 %45
         %47 = OpCompositeExtract %10 %46 1
         %49 = OpFDiv %10 %47 %48
               OpStore %43 %49
               OpBranch %50
         %50 = OpLabel
               OpLoopMerge %52 %53 None
               OpBranch %54
         %54 = OpLabel
         %55 = OpLoad %10 %43
         %56 = OpLoad %10 %26
         %58 = OpFOrdLessThan %57 %55 %56
         %59 = OpLoad %6 %8
         %61 = OpSLessThan %57 %59 %60
         %62 = OpLogicalAnd %57 %58 %61
               OpBranchConditional %62 %51 %52
         %51 = OpLabel
         %63 = OpLoad %11 %13
         %64 = OpLoad %11 %19
         %65 = OpFSub %11 %64 %63
               OpStore %19 %65
         %66 = OpLoad %10 %17
         %67 = OpLoad %10 %26
         %68 = OpFAdd %10 %67 %66
               OpStore %26 %68
         %69 = OpLoad %28 %30
         %70 = OpLoad %11 %19
         %71 = OpImageSampleImplicitLod %20 %69 %70
         %72 = OpCompositeExtract %10 %71 1
               OpStore %43 %72
         %73 = OpLoad %6 %8
         %75 = OpIAdd %6 %73 %74
               OpStore %8 %75
               OpStore %76 %9
               OpBranch %77
         %77 = OpLabel
               OpLoopMerge %79 %80 None
               OpBranch %81
         %81 = OpLabel
               OpBranchConditional %82 %78 %79
         %78 = OpLabel
         %83 = OpLoad %6 %76
         %85 = OpSGreaterThanEqual %57 %83 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
               OpBranch %79
         %87 = OpLabel
         %89 = OpLoad %6 %76
         %90 = OpIAdd %6 %89 %74
               OpStore %76 %90
               OpBranch %80
         %80 = OpLabel
               OpBranch %77
         %79 = OpLabel
               OpBranch %53
         %53 = OpLabel
               OpBranch %50
         %52 = OpLabel
         %93 = OpLoad %6 %8
         %94 = OpConvertSToF %10 %93
         %96 = OpFMul %10 %94 %95
         %98 = OpCompositeConstruct %97 %96 %96 %96
         %99 = OpCompositeExtract %10 %98 0
        %100 = OpCompositeExtract %10 %98 1
        %101 = OpCompositeExtract %10 %98 2
        %102 = OpCompositeConstruct %20 %99 %100 %101 %48
               OpStore %92 %102
               OpReturn
               OpFunctionEnd
