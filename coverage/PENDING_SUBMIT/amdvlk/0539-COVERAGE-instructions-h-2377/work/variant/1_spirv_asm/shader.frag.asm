; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %56
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "S"
               OpMemberName %20 0 "i"
               OpName %22 "s"
               OpName %56 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %56 Location 0
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
         %16 = OpConstant %6 2
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %6
         %21 = OpTypePointer Function %20
         %23 = OpConstantComposite %20 %15
         %33 = OpTypeBool
         %36 = OpConstant %6 3
         %42 = OpConstant %6 1
         %53 = OpTypeFloat 32
         %54 = OpTypeVector %53 4
         %55 = OpTypePointer Output %54
         %56 = OpVariable %55 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %21 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpStore %22 %23
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpAccessChain %7 %22 %15
         %30 = OpLoad %6 %29
         %31 = OpAccessChain %17 %14 %15 %15
         %32 = OpLoad %6 %31
         %34 = OpSLessThan %33 %30 %32
               OpBranchConditional %34 %25 %26
         %25 = OpLabel
         %35 = OpLoad %6 %8
         %37 = OpSGreaterThan %33 %35 %36
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %39
         %38 = OpLabel
               OpBranch %26
         %39 = OpLabel
         %41 = OpLoad %6 %8
         %43 = OpIAdd %6 %41 %42
               OpStore %8 %43
               OpBranch %27
         %27 = OpLabel
         %44 = OpAccessChain %7 %22 %15
         %45 = OpLoad %6 %44
         %46 = OpIAdd %6 %45 %42
               OpStore %44 %46
               OpBranch %24
         %26 = OpLabel
         %47 = OpLoad %6 %8
         %48 = OpAccessChain %17 %14 %15 %42
         %49 = OpLoad %6 %48
         %50 = OpIEqual %33 %47 %49
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %70
         %51 = OpLabel
         %57 = OpAccessChain %17 %14 %15 %16
         %58 = OpLoad %6 %57
         %59 = OpConvertSToF %53 %58
         %60 = OpAccessChain %17 %14 %15 %36
         %61 = OpLoad %6 %60
         %62 = OpConvertSToF %53 %61
         %63 = OpAccessChain %17 %14 %15 %36
         %64 = OpLoad %6 %63
         %65 = OpConvertSToF %53 %64
         %66 = OpAccessChain %17 %14 %15 %16
         %67 = OpLoad %6 %66
         %68 = OpConvertSToF %53 %67
         %69 = OpCompositeConstruct %54 %59 %62 %65 %68
               OpStore %56 %69
               OpBranch %52
         %70 = OpLabel
         %71 = OpAccessChain %17 %14 %15 %36
         %72 = OpLoad %6 %71
         %73 = OpConvertSToF %53 %72
         %74 = OpCompositeConstruct %54 %73 %73 %73 %73
               OpStore %56 %74
               OpBranch %52
         %52 = OpLabel
               OpReturn
               OpFunctionEnd
