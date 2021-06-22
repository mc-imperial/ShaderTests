; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 90
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %22 %78
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %13 "uvstep"
               OpName %17 "slope"
               OpName %19 "coord"
               OpName %22 "gl_FragCoord"
               OpName %26 "refh"
               OpName %32 "tex"
               OpName %46 "h"
               OpName %78 "_GLF_color"
               OpDecorate %8 RelaxedPrecision
               OpDecorate %22 BuiltIn FragCoord
               OpDecorate %32 RelaxedPrecision
               OpDecorate %32 DescriptorSet 0
               OpDecorate %32 Binding 0
               OpDecorate %33 RelaxedPrecision
               OpDecorate %35 RelaxedPrecision
               OpDecorate %36 RelaxedPrecision
               OpDecorate %39 RelaxedPrecision
               OpDecorate %47 RelaxedPrecision
               OpDecorate %49 RelaxedPrecision
               OpDecorate %50 RelaxedPrecision
               OpDecorate %60 RelaxedPrecision
               OpDecorate %70 RelaxedPrecision
               OpDecorate %72 RelaxedPrecision
               OpDecorate %73 RelaxedPrecision
               OpDecorate %74 RelaxedPrecision
               OpDecorate %76 RelaxedPrecision
               OpDecorate %78 Location 0
               OpDecorate %79 RelaxedPrecision
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
         %27 = OpConstant %10 0
         %28 = OpConstantComposite %20 %27 %27 %27 %27
         %29 = OpTypeImage %10 2D 0 0 0 1 Unknown
         %30 = OpTypeSampledImage %29
         %31 = OpTypePointer UniformConstant %30
         %32 = OpVariable %31 UniformConstant
         %37 = OpTypeInt 32 0
         %38 = OpConstant %37 1
         %58 = OpTypeBool
         %61 = OpConstant %6 32
         %75 = OpConstant %6 1
         %77 = OpTypePointer Output %20
         %78 = OpVariable %77 Output
         %81 = OpConstant %10 0.03125
         %83 = OpTypeVector %10 3
         %85 = OpConstant %10 1
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %17 = OpVariable %16 Function
         %19 = OpVariable %12 Function
         %26 = OpVariable %16 Function
         %46 = OpVariable %16 Function
               OpStore %8 %9
               OpStore %13 %15
               OpStore %17 %18
         %23 = OpLoad %20 %22
         %24 = OpVectorShuffle %11 %23 %23 0 1
         %25 = OpVectorTimesScalar %11 %24 %14
               OpStore %19 %25
         %33 = OpLoad %30 %32
         %34 = OpLoad %11 %19
         %35 = OpImageSampleImplicitLod %20 %33 %34
         %36 = OpFAdd %20 %28 %35
         %39 = OpCompositeExtract %10 %36 1
               OpStore %26 %39
         %40 = OpLoad %11 %13
         %41 = OpLoad %11 %19
         %42 = OpFSub %11 %41 %40
               OpStore %19 %42
         %43 = OpLoad %10 %17
         %44 = OpLoad %10 %26
         %45 = OpFAdd %10 %44 %43
               OpStore %26 %45
         %47 = OpLoad %30 %32
         %48 = OpLoad %11 %19
         %49 = OpImageSampleImplicitLod %20 %47 %48
         %50 = OpCompositeExtract %10 %49 1
               OpStore %46 %50
               OpBranch %51
         %51 = OpLabel
               OpLoopMerge %53 %54 None
               OpBranch %55
         %55 = OpLabel
         %56 = OpLoad %10 %46
         %57 = OpLoad %10 %26
         %59 = OpFOrdLessThan %58 %56 %57
         %60 = OpLoad %6 %8
         %62 = OpSLessThan %58 %60 %61
         %63 = OpLogicalAnd %58 %59 %62
               OpBranchConditional %63 %52 %53
         %52 = OpLabel
         %64 = OpLoad %11 %13
         %65 = OpLoad %11 %19
         %66 = OpFSub %11 %65 %64
               OpStore %19 %66
         %67 = OpLoad %10 %17
         %68 = OpLoad %10 %26
         %69 = OpFAdd %10 %68 %67
               OpStore %26 %69
         %70 = OpLoad %30 %32
         %71 = OpLoad %11 %19
         %72 = OpImageSampleImplicitLod %20 %70 %71
         %73 = OpCompositeExtract %10 %72 1
               OpStore %46 %73
         %74 = OpLoad %6 %8
         %76 = OpIAdd %6 %74 %75
               OpStore %8 %76
               OpBranch %54
         %54 = OpLabel
               OpBranch %51
         %53 = OpLabel
         %79 = OpLoad %6 %8
         %80 = OpConvertSToF %10 %79
         %82 = OpFMul %10 %80 %81
         %84 = OpCompositeConstruct %83 %82 %82 %82
         %86 = OpCompositeExtract %10 %84 0
         %87 = OpCompositeExtract %10 %84 1
         %88 = OpCompositeExtract %10 %84 2
         %89 = OpCompositeConstruct %20 %86 %87 %88 %85
               OpStore %78 %89
               OpReturn
               OpFunctionEnd
