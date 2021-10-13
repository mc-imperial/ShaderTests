; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 109
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %73
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "gl_FragCoord"
               OpName %17 "buf1"
               OpMemberName %17 0 "_GLF_uniform_float_values"
               OpName %19 ""
               OpName %30 "i"
               OpName %32 "buf0"
               OpMemberName %32 0 "_GLF_uniform_int_values"
               OpName %34 ""
               OpName %73 "_GLF_color"
               OpName %105 "indexable"
               OpDecorate %9 BuiltIn FragCoord
               OpDecorate %16 ArrayStride 16
               OpMemberDecorate %17 0 Offset 0
               OpDecorate %17 Block
               OpDecorate %19 DescriptorSet 0
               OpDecorate %19 Binding 1
               OpDecorate %31 ArrayStride 16
               OpMemberDecorate %32 0 Offset 0
               OpDecorate %32 Block
               OpDecorate %34 DescriptorSet 0
               OpDecorate %34 Binding 0
               OpDecorate %73 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Input %7
          %9 = OpVariable %8 Input
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 0
         %12 = OpTypePointer Input %6
         %15 = OpConstant %10 2
         %16 = OpTypeArray %6 %15
         %17 = OpTypeStruct %16
         %18 = OpTypePointer Uniform %17
         %19 = OpVariable %18 Uniform
         %20 = OpTypeInt 32 1
         %21 = OpConstant %20 0
         %22 = OpTypePointer Uniform %6
         %25 = OpTypeBool
         %29 = OpTypePointer Function %20
         %31 = OpTypeArray %20 %15
         %32 = OpTypeStruct %31
         %33 = OpTypePointer Uniform %32
         %34 = OpVariable %33 Uniform
         %35 = OpTypePointer Uniform %20
         %52 = OpConstant %10 1
         %60 = OpConstant %20 1
         %72 = OpTypePointer Output %7
         %73 = OpVariable %72 Output
         %99 = OpConstant %10 4
        %100 = OpTypeArray %7 %99
        %104 = OpTypePointer Function %100
        %106 = OpTypePointer Function %7
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %30 = OpVariable %29 Function
        %105 = OpVariable %104 Function
         %13 = OpAccessChain %12 %9 %11
         %14 = OpLoad %6 %13
         %23 = OpAccessChain %22 %19 %21 %21
         %24 = OpLoad %6 %23
         %26 = OpFOrdLessThan %25 %14 %24
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
         %36 = OpAccessChain %35 %34 %21 %21
         %37 = OpLoad %20 %36
               OpStore %30 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %20 %30
         %44 = OpAccessChain %35 %34 %21 %21
         %45 = OpLoad %20 %44
         %46 = OpINotEqual %25 %43 %45
               OpBranchConditional %46 %39 %40
         %39 = OpLabel
               OpReturn
         %41 = OpLabel
               OpBranch %38
         %40 = OpLabel
               OpBranch %28
         %28 = OpLabel
               OpBranch %48
         %48 = OpLabel
               OpLoopMerge %50 %51 None
               OpBranch %49
         %49 = OpLabel
         %53 = OpAccessChain %12 %9 %52
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %22 %19 %21 %21
         %56 = OpLoad %6 %55
         %57 = OpFOrdLessThan %25 %54 %56
         %58 = OpAccessChain %12 %9 %52
         %59 = OpLoad %6 %58
         %61 = OpAccessChain %22 %19 %21 %60
         %62 = OpLoad %6 %61
         %63 = OpFOrdGreaterThanEqual %25 %59 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %65
         %64 = OpLabel
               OpReturn
         %65 = OpLabel
               OpBranch %51
         %51 = OpLabel
         %67 = OpAccessChain %12 %9 %52
         %68 = OpLoad %6 %67
         %69 = OpAccessChain %22 %19 %21 %21
         %70 = OpLoad %6 %69
         %71 = OpFOrdLessThan %25 %68 %70
               OpBranchConditional %71 %48 %50
         %50 = OpLabel
         %74 = OpAccessChain %35 %34 %21 %21
         %75 = OpLoad %20 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpAccessChain %35 %34 %21 %60
         %78 = OpLoad %20 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %35 %34 %21 %60
         %81 = OpLoad %20 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpAccessChain %35 %34 %21 %21
         %84 = OpLoad %20 %83
         %85 = OpConvertSToF %6 %84
         %86 = OpCompositeConstruct %7 %76 %79 %82 %85
         %87 = OpAccessChain %35 %34 %21 %60
         %88 = OpLoad %20 %87
         %89 = OpConvertSToF %6 %88
         %90 = OpCompositeConstruct %7 %89 %89 %89 %89
         %91 = OpAccessChain %35 %34 %21 %60
         %92 = OpLoad %20 %91
         %93 = OpConvertSToF %6 %92
         %94 = OpCompositeConstruct %7 %93 %93 %93 %93
         %95 = OpAccessChain %35 %34 %21 %60
         %96 = OpLoad %20 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpCompositeConstruct %7 %97 %97 %97 %97
        %101 = OpCompositeConstruct %100 %86 %90 %94 %98
        %102 = OpAccessChain %35 %34 %21 %60
        %103 = OpLoad %20 %102
               OpStore %105 %101
        %107 = OpAccessChain %106 %105 %103
        %108 = OpLoad %7 %107
               OpStore %73 %108
               OpReturn
               OpFunctionEnd
