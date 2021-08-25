; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 79
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %31 %41
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %11 "buf1"
               OpMemberName %11 0 "injectionSwitch"
               OpName %13 ""
               OpName %31 "gl_FragCoord"
               OpName %41 "_GLF_color"
               OpName %44 "buf0"
               OpMemberName %44 0 "_GLF_uniform_float_values"
               OpName %46 ""
               OpName %58 "j"
               OpMemberDecorate %11 0 Offset 0
               OpDecorate %11 Block
               OpDecorate %13 DescriptorSet 0
               OpDecorate %13 Binding 1
               OpDecorate %31 BuiltIn FragCoord
               OpDecorate %41 Location 0
               OpDecorate %43 ArrayStride 16
               OpMemberDecorate %44 0 Offset 0
               OpDecorate %44 Block
               OpDecorate %46 DescriptorSet 0
               OpDecorate %46 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeFloat 32
         %10 = OpTypeVector %9 2
         %11 = OpTypeStruct %10
         %12 = OpTypePointer Uniform %11
         %13 = OpVariable %12 Uniform
         %14 = OpConstant %6 0
         %15 = OpTypeInt 32 0
         %16 = OpConstant %15 1
         %17 = OpTypePointer Uniform %9
         %27 = OpTypeBool
         %29 = OpTypeVector %9 4
         %30 = OpTypePointer Input %29
         %31 = OpVariable %30 Input
         %32 = OpConstant %15 0
         %33 = OpTypePointer Input %9
         %36 = OpConstant %9 0
         %40 = OpTypePointer Output %29
         %41 = OpVariable %40 Output
         %42 = OpConstant %15 2
         %43 = OpTypeArray %9 %42
         %44 = OpTypeStruct %43
         %45 = OpTypePointer Uniform %44
         %46 = OpVariable %45 Uniform
         %47 = OpConstant %6 1
         %71 = OpConstant %9 1
         %72 = OpConstantComposite %29 %71 %71 %71 %71
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %58 = OpVariable %7 Function
         %18 = OpAccessChain %17 %13 %14 %16
         %19 = OpLoad %9 %18
         %20 = OpConvertFToS %6 %19
               OpStore %8 %20
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %26 = OpLoad %6 %8
         %28 = OpINotEqual %27 %26 %14
               OpBranchConditional %28 %22 %23
         %22 = OpLabel
         %34 = OpAccessChain %33 %31 %32
         %35 = OpLoad %9 %34
         %37 = OpFOrdGreaterThan %27 %35 %36
               OpSelectionMerge %39 None
               OpBranchConditional %37 %38 %57
         %38 = OpLabel
         %48 = OpAccessChain %17 %46 %14 %47
         %49 = OpLoad %9 %48
         %50 = OpAccessChain %17 %13 %14 %32
         %51 = OpLoad %9 %50
         %52 = OpAccessChain %17 %46 %14 %14
         %53 = OpLoad %9 %52
         %54 = OpAccessChain %17 %46 %14 %47
         %55 = OpLoad %9 %54
         %56 = OpCompositeConstruct %29 %49 %51 %53 %55
               OpStore %41 %56
               OpBranch %39
         %57 = OpLabel
               OpStore %58 %47
               OpBranch %59
         %59 = OpLabel
               OpLoopMerge %61 %62 None
               OpBranch %63
         %63 = OpLabel
         %64 = OpLoad %6 %58
         %65 = OpSGreaterThan %27 %64 %14
               OpBranchConditional %65 %60 %61
         %60 = OpLabel
         %66 = OpAccessChain %33 %31 %32
         %67 = OpLoad %9 %66
         %68 = OpFOrdGreaterThan %27 %67 %36
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %73
         %69 = OpLabel
               OpStore %41 %72
               OpBranch %70
         %73 = OpLabel
               OpKill
         %70 = OpLabel
               OpBranch %62
         %62 = OpLabel
         %75 = OpLoad %6 %58
         %76 = OpISub %6 %75 %47
               OpStore %58 %76
               OpBranch %59
         %61 = OpLabel
               OpBranch %39
         %39 = OpLabel
               OpBranch %24
         %24 = OpLabel
         %77 = OpLoad %6 %8
         %78 = OpISub %6 %77 %47
               OpStore %8 %78
               OpBranch %21
         %23 = OpLabel
               OpReturn
               OpFunctionEnd
