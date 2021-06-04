; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 106
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %87
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %24 "a"
               OpName %28 "buf0"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %42 "i"
               OpName %87 "_GLF_color"
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %87 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %6 1
         %13 = OpConstant %6 2
         %14 = OpConstant %6 3
         %15 = OpConstant %6 4
         %16 = OpConstant %6 5
         %17 = OpConstant %6 6
         %18 = OpConstant %6 7
         %19 = OpConstant %6 8
         %20 = OpConstant %6 9
         %21 = OpConstant %6 10
         %22 = OpConstantComposite %9 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21
         %23 = OpTypePointer Function %6
         %25 = OpConstant %6 0
         %26 = OpConstant %7 3
         %27 = OpTypeArray %6 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %6
         %38 = OpTypeBool
         %58 = OpConstant %6 -1
         %68 = OpTypeVector %6 2
         %70 = OpConstant %7 1
         %84 = OpTypeFloat 32
         %85 = OpTypeVector %84 4
         %86 = OpTypePointer Output %85
         %87 = OpVariable %86 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %24 = OpVariable %23 Function
         %42 = OpVariable %23 Function
               OpStore %11 %22
               OpStore %24 %25
         %32 = OpAccessChain %31 %30 %25 %12
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %23 %11 %33
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %31 %30 %25 %12
         %37 = OpLoad %6 %36
         %39 = OpIEqual %38 %35 %37
               OpSelectionMerge %41 None
               OpBranchConditional %39 %40 %41
         %40 = OpLabel
         %43 = OpAccessChain %31 %30 %25 %13
         %44 = OpLoad %6 %43
               OpStore %42 %44
               OpBranch %45
         %45 = OpLabel
               OpLoopMerge %47 %48 None
               OpBranch %49
         %49 = OpLabel
         %50 = OpLoad %6 %42
         %51 = OpAccessChain %31 %30 %25 %25
         %52 = OpLoad %6 %51
         %53 = OpSLessThan %38 %50 %52
               OpBranchConditional %53 %46 %47
         %46 = OpLabel
               OpBranch %48
         %48 = OpLabel
         %54 = OpLoad %6 %42
         %55 = OpIAdd %6 %54 %12
               OpStore %42 %55
               OpBranch %45
         %47 = OpLabel
         %56 = OpLoad %6 %24
         %57 = OpIAdd %6 %56 %12
               OpStore %24 %57
               OpBranch %41
         %41 = OpLabel
         %59 = OpLoad %6 %24
         %60 = OpSMod %6 %58 %59
         %61 = OpAccessChain %31 %30 %25 %13
         %62 = OpLoad %6 %61
         %63 = OpIEqual %38 %60 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %65
         %64 = OpLabel
         %66 = OpAccessChain %31 %30 %25 %12
         %67 = OpLoad %6 %66
         %69 = OpCompositeConstruct %68 %67 %67
         %71 = OpCompositeExtract %6 %69 1
         %72 = OpAccessChain %31 %30 %25 %13
         %73 = OpLoad %6 %72
         %74 = OpAccessChain %23 %11 %71
               OpStore %74 %73
               OpBranch %65
         %65 = OpLabel
         %75 = OpAccessChain %31 %30 %25 %12
         %76 = OpLoad %6 %75
         %77 = OpAccessChain %23 %11 %76
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %31 %30 %25 %13
         %80 = OpLoad %6 %79
         %81 = OpIEqual %38 %78 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %101
         %82 = OpLabel
         %88 = OpAccessChain %31 %30 %25 %12
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %84 %89
         %91 = OpAccessChain %31 %30 %25 %13
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %84 %92
         %94 = OpAccessChain %31 %30 %25 %13
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %84 %95
         %97 = OpAccessChain %31 %30 %25 %12
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %84 %98
        %100 = OpCompositeConstruct %85 %90 %93 %96 %99
               OpStore %87 %100
               OpBranch %83
        %101 = OpLabel
        %102 = OpAccessChain %31 %30 %25 %13
        %103 = OpLoad %6 %102
        %104 = OpConvertSToF %84 %103
        %105 = OpCompositeConstruct %85 %104 %104 %104 %104
               OpStore %87 %105
               OpBranch %83
         %83 = OpLabel
               OpReturn
               OpFunctionEnd
