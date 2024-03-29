; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 88
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %69
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %19 "b"
               OpName %30 "buf_push"
               OpMemberName %30 0 "one"
               OpName %32 ""
               OpName %69 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %30 0 Offset 0
               OpDecorate %30 Block
               OpDecorate %69 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpTypePointer Uniform %6
         %20 = OpConstant %6 1
         %23 = OpConstant %6 -1
         %30 = OpTypeStruct %6
         %31 = OpTypePointer PushConstant %30
         %32 = OpVariable %31 PushConstant
         %33 = OpTypePointer PushConstant %6
         %36 = OpTypeBool
         %59 = OpConstant %6 2
         %66 = OpTypeFloat 32
         %67 = OpTypeVector %66 4
         %68 = OpTypePointer Output %67
         %69 = OpVariable %68 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpVariable %7 Function
         %17 = OpAccessChain %16 %14 %15 %15
         %18 = OpLoad %6 %17
               OpStore %8 %18
         %21 = OpAccessChain %16 %14 %15 %20
         %22 = OpLoad %6 %21
               OpStore %19 %22
               OpStore %19 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %19
         %34 = OpAccessChain %33 %32 %15
         %35 = OpLoad %6 %34
         %37 = OpSLessThanEqual %36 %29 %35
               OpBranchConditional %37 %25 %26
         %25 = OpLabel
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpAccessChain %16 %14 %15 %20
         %45 = OpLoad %6 %44
         %46 = OpSGreaterThanEqual %36 %43 %45
               OpBranchConditional %46 %39 %40
         %39 = OpLabel
         %47 = OpLoad %6 %8
         %48 = OpISub %6 %47 %20
               OpStore %8 %48
               OpBranch %41
         %41 = OpLabel
               OpBranch %38
         %40 = OpLabel
               OpBranch %27
         %27 = OpLabel
         %49 = OpLoad %6 %19
         %50 = OpIAdd %6 %49 %20
               OpStore %19 %50
               OpBranch %24
         %26 = OpLabel
         %51 = OpLoad %6 %8
         %52 = OpAccessChain %16 %14 %15 %15
         %53 = OpLoad %6 %52
         %54 = OpSNegate %6 %53
         %55 = OpIEqual %36 %51 %54
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
         %58 = OpLoad %6 %19
         %60 = OpAccessChain %16 %14 %15 %59
         %61 = OpLoad %6 %60
         %62 = OpIEqual %36 %58 %61
               OpBranch %57
         %57 = OpLabel
         %63 = OpPhi %36 %55 %26 %62 %56
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %83
         %64 = OpLabel
         %70 = OpAccessChain %16 %14 %15 %15
         %71 = OpLoad %6 %70
         %72 = OpConvertSToF %66 %71
         %73 = OpAccessChain %16 %14 %15 %20
         %74 = OpLoad %6 %73
         %75 = OpConvertSToF %66 %74
         %76 = OpAccessChain %16 %14 %15 %20
         %77 = OpLoad %6 %76
         %78 = OpConvertSToF %66 %77
         %79 = OpAccessChain %16 %14 %15 %15
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %66 %80
         %82 = OpCompositeConstruct %67 %72 %75 %78 %81
               OpStore %69 %82
               OpBranch %65
         %83 = OpLabel
         %84 = OpAccessChain %16 %14 %15 %20
         %85 = OpLoad %6 %84
         %86 = OpConvertSToF %66 %85
         %87 = OpCompositeConstruct %67 %86 %86 %86 %86
               OpStore %69 %87
               OpBranch %65
         %65 = OpLabel
               OpReturn
               OpFunctionEnd
