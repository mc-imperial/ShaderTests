; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %54
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %54 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %54 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 4
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 3
         %17 = OpTypePointer Uniform %6
         %27 = OpTypeBool
         %30 = OpConstant %6 1
         %45 = OpConstant %6 2
         %51 = OpTypeFloat 32
         %52 = OpTypeVector %51 4
         %53 = OpTypePointer Output %52
         %54 = OpVariable %53 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpStore %20 %15
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %20
         %28 = OpSLessThan %27 %26 %16
               OpBranchConditional %28 %22 %23
         %22 = OpLabel
         %29 = OpLoad %6 %20
         %31 = OpAccessChain %17 %14 %15 %30
         %32 = OpLoad %6 %31
         %33 = OpIEqual %27 %29 %32
               OpSelectionMerge %35 None
               OpBranchConditional %33 %34 %38
         %34 = OpLabel
         %36 = OpLoad %6 %8
         %37 = OpIAdd %6 %36 %30
               OpStore %8 %37
               OpBranch %35
         %38 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpLoad %6 %20
         %41 = OpSDiv %6 %39 %40
               OpStore %8 %41
               OpBranch %35
         %35 = OpLabel
               OpBranch %24
         %24 = OpLabel
         %42 = OpLoad %6 %20
         %43 = OpIAdd %6 %42 %30
               OpStore %20 %43
               OpBranch %21
         %23 = OpLabel
         %44 = OpLoad %6 %8
         %46 = OpAccessChain %17 %14 %15 %45
         %47 = OpLoad %6 %46
         %48 = OpIEqual %27 %44 %47
               OpSelectionMerge %50 None
               OpBranchConditional %48 %49 %68
         %49 = OpLabel
         %55 = OpAccessChain %17 %14 %15 %15
         %56 = OpLoad %6 %55
         %57 = OpConvertSToF %51 %56
         %58 = OpAccessChain %17 %14 %15 %30
         %59 = OpLoad %6 %58
         %60 = OpConvertSToF %51 %59
         %61 = OpAccessChain %17 %14 %15 %30
         %62 = OpLoad %6 %61
         %63 = OpConvertSToF %51 %62
         %64 = OpAccessChain %17 %14 %15 %15
         %65 = OpLoad %6 %64
         %66 = OpConvertSToF %51 %65
         %67 = OpCompositeConstruct %52 %57 %60 %63 %66
               OpStore %54 %67
               OpBranch %50
         %68 = OpLabel
         %69 = OpAccessChain %17 %14 %15 %30
         %70 = OpLoad %6 %69
         %71 = OpConvertSToF %51 %70
         %72 = OpCompositeConstruct %52 %71 %71 %71 %71
               OpStore %54 %72
               OpBranch %50
         %50 = OpLabel
               OpReturn
               OpFunctionEnd
